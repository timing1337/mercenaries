import { TCompactProtocol, TFramedTransport } from 'thrift';
import {
    ClientMediaStatus,
    DataHeader,
    DataMessage,
    DataMessageBody,
    E2eeEnforcement,
    EndpointSettings,
    GenericDataMessage,
    HangupRequest,
    JoinRequest,
    MqttThriftHeader,
    NotifyResponse,
    RtcMessageBody,
    RtcMessageHeader,
    RtcSender,
    SessionDescription,
    SyncPayload,
    UpdateRequest
} from '../../codegen';
import ApiRequest from '../api/api';
import { DocumentId } from '../api/document';
import { MqttManager } from '../mqtt/mqtt_manager';
import ThreadManager from '../thread/thread_manager';
import Logger from '../utils/log';
import { randomNumber } from '../utils/utils';
import { MessageType } from './message_type';
import VoiceCallEventListener from './voicecall_listener';

export default class VoiceCallManager {
    public static readonly logger: Logger = new Logger('Voicecall');

    public static clientSessionId: number;

    public static sequenceNumber: number = 0;

    public static conferenceName?: string;
    public static serverInfoData?: string;

    public static init() {
        VoiceCallEventListener.init();
    }

    public static sendRtcPacket(
        bodyType: MessageType,
        body: RtcMessageBody,
        isResponse: boolean = false,
        callback?: (header: RtcMessageHeader, body: RtcMessageBody) => void
    ) {
        const sequence = this.sequenceNumber++;

        const header = new RtcMessageHeader({
            type: bodyType,
            transactionId: randomNumber().toString(),
            retryCount: 0,
            sequenceNumber: sequence,
            clientSessionId: this.clientSessionId.toString(),
            clientStack: 5,
            sender: new RtcSender({
                id: ApiRequest.apiStorage.userId
            }),
            messageTags: new Set(),
            conferenceType: 15,
            serverInfoData: this.serverInfoData,
            conferenceName: this.conferenceName
        });

        if (bodyType != MessageType.JOIN && this.serverInfoData) header.serverInfoData = this.serverInfoData;
        if (this.conferenceName) header.conferenceName = this.conferenceName;
        if (isResponse) header.responseStatusCode = 200;

        const compactProtocol = new TCompactProtocol(
            new TFramedTransport(undefined, async function (outBuf) {
                const output = outBuf!.slice(4);
                const result = await ApiRequest.postWithGraphQL(DocumentId.ZenonMWThriftSendMessageMutation, {
                    input: {
                        endpoint: JSON.stringify({
                            appId: '772021112871879', //zeonAppId
                            deviceId: ApiRequest.apiStorage.deviceId,
                            userId: ApiRequest.apiStorage.userId
                        }),
                        message: output.toString('base64'),
                        actor_id: ApiRequest.apiStorage.userId,
                        client_mutation_id: sequence //?
                    }
                });

                if (result.data['errors']) throw new Error(JSON.stringify(result.data['errors'], null, 4));

                if (result.data['data']['rtc_web_send_multiway_thrift_signaling_message']['response']) {
                    const rspCompactProtocol = new TCompactProtocol(
                        new TFramedTransport(Buffer.from(result.data['data']['rtc_web_send_multiway_thrift_signaling_message']['response'], 'base64'))
                    );
                    const rspHeader = RtcMessageHeader.read(rspCompactProtocol);
                    const rspBody = RtcMessageBody.read(rspCompactProtocol);

                    if (rspHeader.responseStatusCode !== 200) {
                        VoiceCallManager.logger.error(JSON.stringify(rspHeader));
                        VoiceCallManager.logger.error(JSON.stringify(rspBody));
                        VoiceCallManager.logger.error(JSON.stringify(header));
                        VoiceCallManager.logger.error(JSON.stringify(body));
                        return;
                    }

                    if (callback) callback(rspHeader, rspBody);

                    const mqttHeader = new TCompactProtocol(
                        new TFramedTransport(undefined, async function (mqttHeaderBuff) {
                            MqttManager.connection.publish('/t_rtc_multi', Buffer.concat([mqttHeaderBuff!.slice(4), output]));
                        })
                    );

                    new MqttThriftHeader().write(mqttHeader);
                    mqttHeader.flush();
                }
            })
        );
        header.write(compactProtocol);
        body.write(compactProtocol);
        compactProtocol.flush();
    }

    public static async connectCall(threadId: string) {
        if (this.serverInfoData) throw new Error('Already in call');
        this.serverInfoData = ThreadManager.threads.get(threadId)?.rtc_call_data.server_info_data;
        this.clientSessionId = randomNumber();
        const body = new RtcMessageBody({
            joinRequest: new JoinRequest({
                offer: new SessionDescription({
                    sessionId:
                        'v=0\r\no=- 5938421904360738821 3 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=msid-semantic: WMS 4d980d12-4075-4401-8514-aeece16bc2eb\r\na=group:BUNDLE 0 1 2\r\na=extmap-allow-mixed\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 9 0 8 13 110 126\r\nc=IN IP4 0.0.0.0\r\na=rtpmap:111 opus/48000/2\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=fmtp:111 minptime=10;useinbandfec=1;stereo=0;usedtx=1;maxaveragebitrate=20000;maxplaybackrate=16000\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=rtcp-fb:111 transport-cc\r\na=rtcp-fb:111 nack\r\na=rtcp-fb:9 nack\r\na=rtcp-fb:0 nack\r\na=rtcp-fb:8 nack\r\na=rtcp-fb:13 nack\r\na=rtcp-fb:110 nack\r\na=rtcp-fb:126 nack\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=setup:actpass\r\na=mid:0\r\na=msid:4d980d12-4075-4401-8514-aeece16bc2eb c2b294b9-48f2-4df9-92f3-a30ed8041f39\r\na=sendonly\r\na=ice-ufrag:3CsS\r\na=ice-pwd:scJM1J8BE66SHOTHdpU/LGHU\r\na=fingerprint:sha-256 68:76:8E:48:76:61:3C:DC:52:28:15:39:7E:D2:A2:E8:FD:D7:71:97:1F:04:CB:D3:D9:83:7A:0A:96:B4:0E:37\r\na=ice-options:trickle fb-force-5245 renomination\r\na=ssrc:3339893367 cname:3r/ng4XWBFf85z1k\r\na=ssrc:3339893367 msid:4d980d12-4075-4401-8514-aeece16bc2eb c2b294b9-48f2-4df9-92f3-a30ed8041f39\r\na=rtcp-mux\r\na=rtcp-rsize\r\nm=video 9 UDP/TLS/RTP/SAVPF 106 96 97 102 103 107 127 125 41 42 112 113\r\nc=IN IP4 0.0.0.0\r\na=rtpmap:96 VP8/90000\r\na=rtpmap:97 rtx/90000\r\na=rtpmap:102 H264/90000\r\na=rtpmap:103 rtx/90000\r\na=rtpmap:106 H264/90000\r\na=rtpmap:107 rtx/90000\r\na=rtpmap:127 H264/90000\r\na=rtpmap:125 rtx/90000\r\na=rtpmap:41 H264/90000\r\na=rtpmap:42 rtx/90000\r\na=rtpmap:112 H264/90000\r\na=rtpmap:113 rtx/90000\r\na=fmtp:97 apt=96\r\na=fmtp:102 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f;sps-pps-idr-in-keyframe=1\r\na=fmtp:103 apt=102\r\na=fmtp:106 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f;sps-pps-idr-in-keyframe=1\r\na=fmtp:107 apt=106\r\na=fmtp:127 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d001f;sps-pps-idr-in-keyframe=1\r\na=fmtp:125 apt=127\r\na=fmtp:41 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=f4001f;sps-pps-idr-in-keyframe=1\r\na=fmtp:42 apt=41\r\na=fmtp:112 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=64001f;sps-pps-idr-in-keyframe=1\r\na=fmtp:113 apt=112\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=rtcp-fb:96 goog-remb\r\na=rtcp-fb:96 transport-cc\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtcp-fb:102 goog-remb\r\na=rtcp-fb:102 transport-cc\r\na=rtcp-fb:102 ccm fir\r\na=rtcp-fb:102 nack\r\na=rtcp-fb:102 nack pli\r\na=rtcp-fb:106 goog-remb\r\na=rtcp-fb:106 transport-cc\r\na=rtcp-fb:106 ccm fir\r\na=rtcp-fb:106 nack\r\na=rtcp-fb:106 nack pli\r\na=rtcp-fb:127 goog-remb\r\na=rtcp-fb:127 transport-cc\r\na=rtcp-fb:127 ccm fir\r\na=rtcp-fb:127 nack\r\na=rtcp-fb:127 nack pli\r\na=rtcp-fb:41 goog-remb\r\na=rtcp-fb:41 transport-cc\r\na=rtcp-fb:41 ccm fir\r\na=rtcp-fb:41 nack\r\na=rtcp-fb:41 nack pli\r\na=rtcp-fb:112 goog-remb\r\na=rtcp-fb:112 transport-cc\r\na=rtcp-fb:112 ccm fir\r\na=rtcp-fb:112 nack\r\na=rtcp-fb:112 nack pli\r\na=extmap:14 urn:ietf:params:rtp-hdrext:toffset\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type\r\na=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-timing\r\na=extmap:8 http://www.webrtc.org/experiments/rtp-hdrext/color-space\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=extmap:10 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id\r\na=extmap:11 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id\r\na=extmap:5 http://www.webrtc.org/experiments/rtp-hdrext/video-layers-allocation00\r\na=setup:actpass\r\na=mid:1\r\na=recvonly\r\na=ice-ufrag:3CsS\r\na=ice-pwd:scJM1J8BE66SHOTHdpU/LGHU\r\na=fingerprint:sha-256 68:76:8E:48:76:61:3C:DC:52:28:15:39:7E:D2:A2:E8:FD:D7:71:97:1F:04:CB:D3:D9:83:7A:0A:96:B4:0E:37\r\na=ice-options:trickle\r\na=rtcp-mux\r\na=rtcp-rsize\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=setup:actpass\r\na=mid:2\r\na=ice-ufrag:3CsS\r\na=ice-pwd:scJM1J8BE66SHOTHdpU/LGHU\r\na=fingerprint:sha-256 68:76:8E:48:76:61:3C:DC:52:28:15:39:7E:D2:A2:E8:FD:D7:71:97:1F:04:CB:D3:D9:83:7A:0A:96:B4:0E:37\r\na=ice-options:trickle\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n'
                }),
                userCapabilities: JSON.stringify({
                    AddParticipantEnabled: false,
                    GROUP_COWATCH: true,
                    MultipleVideoStreamsAllowed: true,
                    MW_AV_ESCALATION: true,
                    canApproveCollaborationSpaceJoinRequests: true,
                    cowatch: true,
                    screen_sharing: false,
                    sctp_hangup: false,
                    sctpSecondPc: false
                }),
                userToEscalate: ApiRequest.apiStorage.userId,
                conferenceType: 15,
                appMessages: [
                    new DataMessage({
                        header: new DataHeader({
                            topic_DEPRECATED: 'joining_context'
                        }),
                        body: new DataMessageBody({
                            genericMessage: new GenericDataMessage({
                                topic: 'joining_context',
                                data: JSON.stringify({
                                    group_thread_id: threadId,
                                    server_info_data: this.serverInfoData
                                })
                            })
                        })
                    })
                ],
                mediaStatusEx: new ClientMediaStatus(),
                syncPayload: new SyncPayload(),
                e2eeEnforcement: new E2eeEnforcement({
                    mode: 0,
                    preventSfuMode: false,
                    infraMandatedExpStatus: 0
                }),
                clientMediaMode: 1,
                endpointSettings: new EndpointSettings({
                    joinMode: 0
                })
            })
        });

        await VoiceCallManager.sendRtcPacket(MessageType.JOIN, body, false, VoiceCallEventListener.onVoiceCallJoined);
    }

    public static syncData(topic: string, data: string = '', version: number = 1, topicId: number = 0) {
        this.sendRtcPacket(
            MessageType.UPDATE,
            new RtcMessageBody({
                updateRequest: new UpdateRequest({
                    syncPayload: new SyncPayload({}),
                    topic: topic,
                    data: data,
                    version: version,
                    topicId: topicId
                })
            })
        );
    }

    public static notifyResponse(topic: string, version: number) {
        this.sendRtcPacket(
            MessageType.NOTIFY,
            new RtcMessageBody({
                notifyResponse: new NotifyResponse({
                    topic: topic,
                    version: version
                })
            })
        );
    }

    public static disconnectCall() {
        VoiceCallManager.sendRtcPacket(
            MessageType.HANGUP,
            new RtcMessageBody({
                hangupRequest: new HangupRequest({
                    reason: 1,
                    detailedReasonString: ''
                })
            }),
            false,
            VoiceCallEventListener.onDismiss
        );
    }
}
