import VoiceCallManager from '../../voicecall/voicecall_manager';
import Command from '../command';
import { CommandManager } from '../command_manager';

export default class VoiceConnectCommand extends Command {
    public constructor() {
        super('voiceconnect', 'Disconnect voicechat');
    }

    public execute(threadId: string, args: string[]) {
        try {
            VoiceCallManager.connectCall(threadId);
        } catch (ex) {
            CommandManager.logger.error(ex);
        }
    }
}
