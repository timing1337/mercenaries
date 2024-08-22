import * as mqtt from 'mqtt';
import Logger from '../utils/log';
import MercenariesBot from '../core';
import ApiRequest from '../api/api';
import { WebSocket } from 'ws';
import ThreadManager from './thread_manager';
import { TMSData } from '../api/mqtt/mqtt';
import { EventManager } from './event_manager';
import { EventType } from '../event/event_type';

const TOPICS = [
    '/legacy_web',
    '/webrtc',
    '/rtc_multi',
    '/ls_req',
    '/onevc',
    '/br_sr',
    '/sr_res',
    '/t_ms',
    '/6',
    '/orca_typing_notifications',
    '/notify_disconnect',
    '/orca_presence',
    '/inbox',
    '/mercury',
    '/messaging_events',
    '/orca_message_notifications',
    '/pp',
    '/webrtc_response',
    '/ls_res',
    '/t_rtc_multi',
    '/ls_app_settings'
];

export class ListenManager {
    public static logger: Logger = new Logger('MQTTClient');

    public static connection: mqtt.MqttClient;
    public static syncToken: string;

    public static init() {
        const clientId = crypto.randomUUID();
        const sessionId = Math.floor(Math.random() * 9007199254740991) + 1; //? :skull:

        const url = `wss://edge-chat.messenger.com/chat?region=pnb&sid=${sessionId}&cid=${clientId}`;
        this.connection = mqtt.connect(url, {
            clientId: 'mqttwsclient',
            protocolId: 'MQIsdp',
            protocolVersion: 3,
            clean: true,
            keepalive: 10,
            reschedulePings: true,
            connectTimeout: 100000,
            reconnectPeriod: 1000,
            createWebsocket: (url: string, websocketSubProtocols: string[], options: mqtt.IClientOptions) => {
                return new WebSocket(url, {
                    headers: {
                        Cookie: ApiRequest.cookieJar.getCookieStringSync('https://www.messenger.com/'),
                        Origin: 'https://www.messenger.com',
                        'User-Agent':
                            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
                        Referer: 'https://www.messenger.com/',
                        Host: 'edge-chat.messenger.com'
                    },
                    origin: 'https://www.messenger.com',
                    protocolVersion: 13
                });
            },
            username: JSON.stringify({
                a: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
                aid: '219994525426954',
                aids: null,
                chat_on: true,
                cp: 3,
                ct: 'websocket',
                d: clientId,
                dc: '',
                ecp: 10,
                fg: true,
                gas: null,
                mqtt_sid: '',
                no_auto_fg: true,
                p: null,
                pack: [],
                pm: [],
                s: sessionId,
                st: TOPICS,
                u: MercenariesBot.userId
            })
        });
        this.connection.on('connect', this.onConnect.bind(this));
        this.connection.on('error', this.onError.bind(this));
        this.connection.on('disconnect', this.onDisconnect.bind(this));
        this.connection.on('message', this.onMessage.bind(this));
    }

    public static async onMessage(topic: string, payload: Buffer, packet: mqtt.IPublishPacket) {
        const object = JSON.parse(payload.toString());
        switch (topic) {
            case '/t_ms':
                const tmsData = object as TMSData;
                if (tmsData.firstDeltaSeqId) {
                    ThreadManager.syncSequenceId = tmsData.firstDeltaSeqId;
                    this.syncToken = object['syncToken'];
                }
                if (tmsData.lastIssuedSeqId) {
                    ThreadManager.syncSequenceId = tmsData.lastIssuedSeqId;
                }
                if (tmsData.deltas) {
                    for (const delta of tmsData.deltas) {
                        if (delta.class == 'NewMessage') EventManager.call(EventType.NewMessage, delta);
                    }
                }
                //Handle the actual goodies :)))
                break;
        }
    }

    public static async onDisconnect() {
        this.logger.debug('Disconnected to edge-chat.messenger.com');
    }

    public static async onConnect() {
        this.logger.debug('Connected to edge-chat.messenger.com');
        this.connection.subscribe(TOPICS);

        const syncData = {
            sync_api_version: 11,
            max_deltas_able_to_process: 1000,
            delta_batch_size: 500,
            encoding: 'JSON',
            entity_fbid: MercenariesBot.userId
        } as any;

        if (!this.syncToken) {
            syncData['initial_titan_sequence_id'] = ThreadManager.syncSequenceId;
            this.connection.publish('/messenger_sync_create_queue', JSON.stringify(syncData), {
                qos: 1
            });
        } else {
            syncData['last_seq_id'] = ThreadManager.syncSequenceId;
            syncData['sync_token'] = this.syncToken;
            this.connection.publish('/messenger_sync_get_diffs', JSON.stringify(syncData), {
                qos: 1
            });
        }
    }

    public static async onError(err: mqtt.ErrorWithReasonCode | Error) {
        this.logger.error(err);
    }
}
