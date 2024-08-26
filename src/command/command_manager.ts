import Command from '../command/command';
import { EventManager } from '../event/event_manager';
import { EventType } from '../event/event_type';
import { MessageData } from '../message/message';
import Logger from '../utils/log';
import AboutCommand from './defaults/about';
import TraCuuDiemThiCommand from './defaults/tracuudiemthi';
import VoiceConnectCommand from './defaults/voice_connect';
import DisconnectVoiceCommand from './defaults/voice_disconnect';

export class CommandManager {
    public static readonly logger: Logger = new Logger('Command');
    public static commands: Map<string, Command> = new Map<string, Command>();

    public static init() {
        EventManager.registerCallback(EventType.NewMessage, this.onReceiveMessage.bind(this));

        CommandManager.registerCommand(new VoiceConnectCommand());
        CommandManager.registerCommand(new DisconnectVoiceCommand());
        CommandManager.registerCommand(new AboutCommand());
        CommandManager.registerCommand(new TraCuuDiemThiCommand());
    }

    public static registerCommand(command: Command) {
        this.commands.set(command.name, command);
    }

    public static async onReceiveMessage(messageData: MessageData) {
        if (!messageData.body) return;
        if (!messageData.body.startsWith('!')) return;
        const args = messageData.body.split(' ');
        const command = args.shift()!.substring(1);
        if (this.commands.has(command?.toLowerCase())) {
            this.commands.get(command.toLowerCase())?.execute(messageData.messageMetadata.threadKey.threadFbId, args);
        }
    }
}
