import ApiRequest from './api/api';
import { CommandManager } from './manager/command_manager';
import { ListenManager } from './manager/listen_manager';
import ThreadManager from './manager/thread_manager';

export default class MercenariesBot {
    public static init() {
        ApiRequest.init().then(async () => {
            await ThreadManager.init();
            await CommandManager.init();
            await ListenManager.init();
        });
    }
}
