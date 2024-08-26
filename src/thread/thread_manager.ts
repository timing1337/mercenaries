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
            const threadId = thread.thread_key.thread_fbid;
            this.logger.debug(`Thread #${threadId}: ${thread.name}`);
            this.threads.set(threadId, thread);

            if (thread.rtc_call_data.call_state == 'AUDIO_GROUP_CALL') {
                //VoiceCallManager.serverDataKeys.set(threadId, thread.rtc_call_data.server_info_data);
                this.logger.log(`Group calling is happening in thread #${threadId}`);
            }
        }
    }
}
