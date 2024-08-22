import ThreadGraphQl, { Thread } from '../api/thread/thread';
import Logger from '../utils/log';

export default class ThreadManager {
    public static logger: Logger = new Logger('ThreadManager');

    public static threads: Map<string, Thread> = new Map<string, Thread>();

    public static syncSequenceId: number;

    public static async init() {
        const threadsData = await ThreadGraphQl.getThreadsData();
        this.syncSequenceId = threadsData.sync_sequence_id;
        this.logger.debug(`There are currently ${threadsData.threads.filter((thread) => thread.thread_type == 'GROUP').length} groups`);
        for (const thread of threadsData.threads) {
            this.threads.set(thread.id, thread);
        }
    }
}
