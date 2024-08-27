import { ClientEvent, ClientEventRequest, ConferenceStateResponse, NotifyResponse, RtcMessageBody, RtcMessageHeader } from '../../codegen';
import { EventManager } from '../event/event_manager';
import { EventType } from '../event/event_type';
import { MessageType } from './message_type';
import VoiceCallManager from './voicecall_manager';

export default class VoiceCallEventListener {
    public static init() {
        EventManager.registerCallback(EventType.MQTT_CONFERENCE_STATE, this.onRequestConferenceState.bind(this));
        EventManager.registerCallback(EventType.MQTT_NOTIFY, this.onReceiveNotify.bind(this));
    }

    public static onDismiss(header: RtcMessageHeader, body: RtcMessageBody) {
        VoiceCallManager.serverInfoData = undefined;
        VoiceCallManager.conferenceName = undefined;
        VoiceCallManager.logger.debug('Call disconnected');
    }

    public static onReceiveNotify(header: RtcMessageHeader, body: RtcMessageBody) {
        VoiceCallManager.sendRtcPacket(
            MessageType.NOTIFY,
            new RtcMessageBody({
                notifyResponse: new NotifyResponse({
                    topic: body.notifyRequest?.topic,
                    version: body.notifyRequest?.version
                })
            }),
            true
        );
    }

    public static onRequestConferenceState(header: RtcMessageHeader, body: RtcMessageBody) {
        VoiceCallManager.sendRtcPacket(
            MessageType.CONFERENCE_STATE,
            new RtcMessageBody({
                conferenceStateResponse: new ConferenceStateResponse({
                    currentVersion: body.conferenceStateRequest?.version
                })
            }),
            true
        );
    }

    public static onVoiceCallJoined(header: RtcMessageHeader, body: RtcMessageBody) {
        VoiceCallManager.serverInfoData = header.serverInfoData;
        VoiceCallManager.conferenceName = header.conferenceName;

        VoiceCallManager.syncData('screenshare_floor_control', '\u0015\u0004\u0015\u0002\u0015\u0000($cbcea2b0-8ae5-4346-947d-56d4379291d1\u0000');
        VoiceCallManager.syncData('screenshare_floor_control', '\u0015\u0004\u0015\u0002\u0015\u0000($cbcea2b0-8ae5-4346-947d-56d4379291d1\u0000', 3);

        VoiceCallManager.sendRtcPacket(
            MessageType.CLIENT_EVENT,
            new RtcMessageBody({
                clientEventRequest: new ClientEventRequest({
                    clientEvents: [
                        new ClientEvent({
                            type: 1
                        })
                    ]
                })
            })
        );

        VoiceCallManager.syncData('coplay', '1\u0000', 2);
        VoiceCallManager.syncData('media_sync', '');
        VoiceCallManager.syncData('media_sync_autoplay', '');
    }
}
