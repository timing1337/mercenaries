import { MessageManager } from '../../manager/message_manager';
import Command from '../command';

export default class AboutCommand extends Command {
    public constructor() {
        super('about', 'Thông tin về bot');
    }

    public execute(threadId: string, args: string[]) {
        MessageManager.sendMessage(
            threadId,
            `
✨ mercenaries v1.0!
🧑‍💻 owner: timing1337
📌 github: https://github.com/timing1337
`
        );
    }
}
