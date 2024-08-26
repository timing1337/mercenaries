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
    RtcMessageBody,
    RtcMessageHeader,
    RtcSender,
    SessionDescription,
    SyncPayload,
    UpdateRequest
} from '../../codegen';
import ApiRequest from '../api/api';
import { DocumentId } from '../api/document';
import { MessageType } from './message_type';

export default class VoiceCallManager {
    public static clientSessionId?: number;

    public static sequenceNumber: number = 0;

    public static currentAttendingConferenceName?: string;
    public static currentAtttendingThreadId?: string;

    public static serverDataKey?: string;

    //Reserved for ongoing calls

    public static sendRtcPacket(bodyType: MessageType, body: RtcMessageBody, callback?: (header: RtcMessageHeader, body: RtcMessageBody) => void) {
        if (!this.clientSessionId) throw new Error('Client is not connected to any call');

        const sequence = this.sequenceNumber++;

        const header = new RtcMessageHeader({
            type: bodyType,
            transactionId: (Math.floor(Math.random() * 90000000000) + 1).toString(),
            clientSessionId: this.clientSessionId.toString(),
            clientStack: 5,
            sender: new RtcSender({
                id: ApiRequest.apiStorage.userId
            }),
            sequenceNumber: sequence,
            conferenceType: 15
        });

        if (this.serverDataKey) header.serverInfoData = this.serverDataKey;
        if (this.currentAttendingConferenceName) header.conferenceName = this.currentAttendingConferenceName;

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
                    const header = RtcMessageHeader.read(rspCompactProtocol);
                    const body = RtcMessageBody.read(rspCompactProtocol);

                    if (header.responseStatusCode !== 200) throw new Error('RTCHeader responded with code ' + header.responseStatusCode);

                    if (callback) callback(header, body);
                }
            })
        );
        header.write(compactProtocol);
        body.write(compactProtocol);
        compactProtocol.flush();
    }

    public static connectCall(threadId: string) {
        if (this.clientSessionId) throw new Error('Client is already in call');
        this.clientSessionId = 323041;
        this.currentAtttendingThreadId = threadId;
        //sessionId, holy hell

        const oId = Math.random().toString().substr(2, 22);
        const msId = crypto.randomUUID();
        const msIdSecondPart = crypto.randomUUID(); //?

        let sdp = ``;
        sdp += `v=0\r\n`;
        sdp += `o=- ${oId} 3 IN IP4 balls.com\r\n`;
        sdp += `s=-\r\n`;
        sdp += `t=0 0\r\n`;

        sdp += `a=msid-semantic: WMS ${msId}\r\n`;
        sdp += `a=group:BUNDLE 0 1 2\r\n`;
        sdp += `a=extmap-allow-mixed\r\n`;

        sdp += `m=audio 9 UDP/TLS/RTP/SAVPF 111 9 0 8 13 110 126\r\n`;
        sdp += `c=IN IP4 0.0.0.0\r\n`;
        sdp += `a=rtpmap:111 opus/48000/2\r\n`;
        sdp += `a=rtpmap:9 G722/8000\r\n`;
        sdp += `a=rtpmap:0 PCMU/8000\r\n`;
        sdp += `a=rtpmap:8 PCMA/8000\r\n`;
        sdp += `a=rtpmap:13 CN/8000\r\n`;
        sdp += `a=rtpmap:110 telephone-event/48000\r\n`;
        sdp += `a=rtpmap:126 telephone-event/8000\r\n`;
        sdp += `a=fmtp:111 minptime=10;useinbandfec=1;stereo=0;usedtx=1;maxaveragebitrate=20000;maxplaybackrate=16000\r\n`;
        sdp += `a=rtcp:9 IN IP4 0.0.0.0\r\n`;
        sdp += `a=rtcp-fb:111 transport-cc\r\n`;
        sdp += `a=rtcp-fb:111 nack\r\n`;
        sdp += `a=rtcp-fb:9 nack\r\n`;
        sdp += `a=rtcp-fb:0 nack\r\n`;
        sdp += `a=rtcp-fb:8 nack\r\n`;
        sdp += `a=rtcp-fb:13 nack\r\n`;
        sdp += `a=rtcp-fb:110 nack\r\n`;
        sdp += `a=rtcp-fb:126 nack\r\n`;
        sdp += `a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\n`;
        sdp += `a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\n`;
        sdp += `a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\n`;
        sdp += `a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\n`;
        sdp += `a=setup:actpass\r\n`;
        sdp += `a=mid:0\r\n`;
        sdp += `a=msid:${msId} ${msIdSecondPart}\r\n`;
        sdp += `a=sendonly\r\n`;
        sdp += `a=ice-ufrag:balls\r\n`;
        sdp += `a=ice-pwd:balls\r\n`;
        sdp += `a=fingerprint:sha-256 8C:01:74:C7:99:79:74:A6:20:BE:AA:FE:BB:B5:F3:ED:CA:98:7D:04:25:B5:6E:62:0E:3D:F1:FF:45:A5:AB:9C\r\n`;
        sdp += `a=ice-options:trickle fb-force-5245 renomination\r\n`;
        sdp += `a=ssrc:1672470091 cname:balls\r\n`;
        sdp += `a=ssrc:1672470091 msid:${msId} ${msIdSecondPart}\r\n`;
        sdp += `a=rtcp-mux\r\n`;
        sdp += `a=rtcp-rsize\r\n`;
        sdp += `m=video 9 UDP/TLS/RTP/SAVPF 106 96 97 102 103 107 127 125 41 42 112 113\r\n`;
        sdp += `c=IN IP4 0.0.0.0\r\n`;
        sdp += `a=rtpmap:96 VP8/90000\r\n`;
        sdp += `a=rtpmap:97 rtx/90000\r\n`;
        sdp += `a=rtpmap:102 H264/90000\r\n`;
        sdp += `a=rtpmap:103 rtx/90000\r\n`;
        sdp += `a=rtpmap:106 H264/90000\r\n`;
        sdp += `a=rtpmap:107 rtx/90000\r\n`;
        sdp += `a=rtpmap:127 H264/90000\r\n`;
        sdp += `a=rtpmap:125 rtx/90000\r\n`;
        sdp += `a=rtpmap:41 H264/90000\r\n`;
        sdp += `a=rtpmap:42 rtx/90000\r\n`;
        sdp += `a=rtpmap:112 H264/90000\r\n`;
        sdp += `a=rtpmap:113 rtx/90000\r\n`;
        sdp += `a=fmtp:97 apt=96\r\n`;
        sdp += `a=fmtp:102 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f;sps-pps-idr-in-keyframe=1\r\n`;
        sdp += `a=fmtp:103 apt=102\r\n`;
        sdp += `a=fmtp:106 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f;sps-pps-idr-in-keyframe=1\r\n`;
        sdp += `a=fmtp:107 apt=106\r\n`;
        sdp += `a=fmtp:127 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d001f;sps-pps-idr-in-keyframe=1\r\n`;
        sdp += `a=fmtp:125 apt=127\r\n`;
        sdp += `a=fmtp:41 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=f4001f;sps-pps-idr-in-keyframe=1\r\n`;
        sdp += `a=fmtp:42 apt=41\r\n`;
        sdp += `a=fmtp:112 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=64001f;sps-pps-idr-in-keyframe=1\r\n`;
        sdp += `a=fmtp:113 apt=112\r\n`;
        sdp += `a=rtcp:9 IN IP4 0.0.0.0\r\n`;
        sdp += `a=rtcp-fb:96 goog-remb\r\n`;
        sdp += `a=rtcp-fb:96 transport-cc\r\n`;
        sdp += `a=rtcp-fb:96 ccm fir\r\n`;
        sdp += `a=rtcp-fb:96 nack\r\n`;
        sdp += `a=rtcp-fb:96 nack pli\r\n`;
        sdp += `a=rtcp-fb:102 goog-remb\r\n`;
        sdp += `a=rtcp-fb:102 transport-cc\r\n`;
        sdp += `a=rtcp-fb:102 ccm fir\r\n`;
        sdp += `a=rtcp-fb:102 nack\r\n`;
        sdp += `a=rtcp-fb:102 nack pli\r\n`;
        sdp += `a=rtcp-fb:106 goog-remb\r\n`;
        sdp += `a=rtcp-fb:106 transport-cc\r\n`;
        sdp += `a=rtcp-fb:106 ccm fir\r\n`;
        sdp += `a=rtcp-fb:106 nack\r\n`;
        sdp += `a=rtcp-fb:106 nack pli\r\n`;
        sdp += `a=rtcp-fb:127 goog-remb\r\n`;
        sdp += `a=rtcp-fb:127 transport-cc\r\n`;
        sdp += `a=rtcp-fb:127 ccm fir\r\n`;
        sdp += `a=rtcp-fb:127 nack\r\n`;
        sdp += `a=rtcp-fb:127 nack pli\r\n`;
        sdp += `a=rtcp-fb:41 goog-remb\r\n`;
        sdp += `a=rtcp-fb:41 transport-cc\r\n`;
        sdp += `a=rtcp-fb:41 ccm fir\r\n`;
        sdp += `a=rtcp-fb:41 nack\r\n`;
        sdp += `a=rtcp-fb:41 nack pli\r\n`;
        sdp += `a=rtcp-fb:112 goog-remb\r\n`;
        sdp += `a=rtcp-fb:112 transport-cc\r\n`;
        sdp += `a=rtcp-fb:112 ccm fir\r\n`;
        sdp += `a=rtcp-fb:112 nack\r\n`;
        sdp += `a=rtcp-fb:112 nack pli\r\n`;
        sdp += `a=extmap:14 urn:ietf:params:rtp-hdrext:toffset\r\n`;
        sdp += `a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\n`;
        sdp += `a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\n`;
        sdp += `a=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type\r\n`;
        sdp += `a=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-timing\r\n`;
        sdp += `a=extmap:8 http://www.webrtc.org/experiments/rtp-hdrext/color-space\r\n`;
        sdp += `a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\n`;
        sdp += `a=extmap:10 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id\r\n`;
        sdp += `a=extmap:11 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id\r\n`;
        sdp += `a=extmap:5 http://www.webrtc.org/experiments/rtp-hdrext/video-layers-allocation00\r\n`;
        sdp += `a=setup:actpass\r\n`;
        sdp += `a=mid:1\r\n`;
        sdp += `a=recvonly\r\n`;
        sdp += `a=ice-ufrag:balls\r\n`;
        sdp += `a=ice-pwd:balls\r\n`;
        sdp += `a=fingerprint:sha-256 8C:01:74:C7:99:79:74:A6:20:BE:AA:FE:BB:B5:F3:ED:CA:98:7D:04:25:B5:6E:62:0E:3D:F1:FF:45:A5:AB:9C\r\n`;
        sdp += `a=ice-options:trickle\r\n`;
        sdp += `a=rtcp-mux\r\n`;
        sdp += `a=rtcp-rsize\r\n`;
        sdp += `m=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\n`;
        sdp += `c=IN IP4 0.0.0.0\r\n`;
        sdp += `a=setup:actpass\r\n`;
        sdp += `a=mid:2\r\n`;
        sdp += `a=ice-ufrag:balls\r\n`;
        sdp += `a=ice-pwd:balls\r\n`;
        sdp += `a=fingerprint:sha-256 8C:01:74:C7:99:79:74:A6:20:BE:AA:FE:BB:B5:F3:ED:CA:98:7D:04:25:B5:6E:62:0E:3D:F1:FF:45:A5:AB:9C\r\n`;
        sdp += `a=ice-options:trickle\r\n`;
        sdp += `a=sctp-port:5000`;

        const body = new RtcMessageBody({
            joinRequest: new JoinRequest({
                offer: new SessionDescription({
                    sessionId: sdp
                }),
                userCapabilities: JSON.stringify({
                    AddParticipantEnabled: true,
                    GROUP_COWATCH: true,
                    MultipleVideoStreamsAllowed: true,
                    MW_AV_ESCALATION: true,
                    canApproveCollaborationSpaceJoinRequests: true,
                    cowatch: true,
                    screen_sharing: true,
                    sctp_hangup: true,
                    sctpSecondPc: true
                }),
                appMessages: [
                    new DataMessage({
                        header: new DataHeader({
                            topic_DEPRECATED: 'joining_context'
                        }),
                        body: new DataMessageBody({
                            genericMessage: new GenericDataMessage({
                                topic: 'joining_context',
                                data: JSON.stringify({
                                    group_thread_id: threadId
                                })
                            })
                        })
                    })
                ],
                mediaStatusEx: new ClientMediaStatus(),
                syncPayload: new SyncPayload(),
                e2eeEnforcement: new E2eeEnforcement({
                    mode: 1,
                    preventSfuMode: false,
                    infraMandatedExpStatus: 0
                }),
                clientMediaMode: 0,
                endpointSettings: new EndpointSettings({
                    joinMode: 1
                })
            })
        });

        VoiceCallManager.sendRtcPacket(MessageType.JOIN, body, (header, body) => {
            this.serverDataKey = header.serverInfoData!;
            this.currentAttendingConferenceName = header.conferenceName!;
        });
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

    public static disconnectCall() {
        VoiceCallManager.sendRtcPacket(
            MessageType.HANGUP,
            new RtcMessageBody({
                hangupRequest: new HangupRequest({
                    reason: 0,
                    detailedReasonString: ''
                })
            }),
            (header, body) => {
                this.currentAttendingConferenceName = undefined;
                this.currentAtttendingThreadId = undefined;
                this.clientSessionId = undefined;
                this.serverDataKey = undefined;
            }
        );
    }
}
