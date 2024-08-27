import ApiRequest from './api/api';
import { CommandManager } from './command/command_manager';
import { MqttManager } from './mqtt/mqtt_manager';
import ThreadManager from './thread/thread_manager';
import VoiceCallManager from './voicecall/voicecall_manager';

export default class MercenariesBot {
    public static init() {
        ApiRequest.init().then(async () => {
            await ThreadManager.init();
            await CommandManager.init();
            await MqttManager.init();
            await VoiceCallManager.init();
        });
    }
}
