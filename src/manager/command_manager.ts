import { EventManager } from './event_manager';
import { EventType } from '../event/event_type';
import { MessageData } from '../api/message/message';
import Command from '../command/command';
import AboutCommand from '../command/defaults/AboutCommand';
import TraCuuDiemThiCommand from '../command/defaults/TraCuuDiemThiCommand';

export class CommandManager {
    public static commands: Map<string, Command> = new Map<string, Command>();

    public static init() {
        EventManager.registerCallback(EventType.NewMessage, this.onReceiveMessage.bind(this));

        this.commands.set('about', new AboutCommand());
        //this.commands.set("chatgpt", new ChatGPTCommand());
        this.commands.set('tracuudiemthi', new TraCuuDiemThiCommand());
    }

    public static async onReceiveMessage(messageData: MessageData) {
        if (!messageData.body.startsWith('!')) return;
        const args = messageData.body.split(' ');
        const command = args.shift()!.substring(1);
        if (this.commands.has(command?.toLowerCase())) {
            this.commands.get(command.toLowerCase())?.execute(messageData.messageMetadata.threadKey.threadFbId, args);
        }
    }
}
