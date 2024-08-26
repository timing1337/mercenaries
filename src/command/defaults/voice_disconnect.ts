import VoiceCallManager from '../../voicecall/voicecall_manager';
import Command from '../command';
import { CommandManager } from '../command_manager';

export default class VoiceDisconnectCommand extends Command {
    public constructor() {
        super('voicedisconnect', 'Disconnect voicechat');
    }

    public execute(threadId: string, args: string[]) {
        try {
            VoiceCallManager.disconnectCall();
        } catch (ex) {
            CommandManager.logger.error(ex);
        }
    }
}
