import Logger from '../utils/log';
import ThreadGraphQl, { Thread } from './thread';

export default class ThreadManager {
    public static logger: Logger = new Logger('ThreadManager');

    public static threads: Map<string, Thread> = new Map<string, Thread>();

    public static syncSequenceId: number;

    public static async init() {
        const threadsData = await ThreadGraphQl.getThreadsData();
        this.syncSequenceId = threadsData.sync_sequence_id;
        this.logger.debug(`There are currently ${threadsData.threads.filter((thread) => thread.thread_type == 'GROUP').length} groups`);
        for (const thread of threadsData.threads) {
            this.logger.debug(`Thread #${thread.thread_key.thread_fbid}: ${thread.name}`);
            this.threads.set(thread.thread_key.thread_fbid, thread);
        }
    }
}