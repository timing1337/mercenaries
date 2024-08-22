import ApiRequest from './api/api';
import { CommandManager } from './manager/command_manager';
import { ListenManager } from './manager/listen_manager';
import ThreadManager from './manager/thread_manager';

type Credential = {
    email: string;
    password: string;
};

export default class MercenariesBot {
    public static dtsg: string;
    public static deviceId: string;
    public static region: string;
    public static userId: string;

    public static init() {
        ApiRequest.init().then(() => {
            ThreadManager.init();
            CommandManager.init();
            ListenManager.init();
        });
    }
}
