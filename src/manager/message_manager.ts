import ApiRequest from '../api/api';
import { DocumentId } from '../api/document';
import FileCdn from '../api/message/file';
import Logger from '../utils/log';
import { Version } from '../utils/utils';

export class MessageManager {
    public static logger: Logger = new Logger('Messages');
    public static taskId: number = 0;

    public static async syncGroupChatMessage(threadId: string) {
        const epoch = Math.floor(Date.now() / 1000);

        const result = await ApiRequest.postWithGraphQL(DocumentId.LSPlatformGraphQLLightspeedRequestQuery, {
            deviceId: ApiRequest.apiStorage.deviceId,
            requestId: 0,
            requestType: 3,
            requestPayload: JSON.stringify({
                version_id: Version.LSVERSION, //LSversion
                tasks: [
                    {
                        label: '21', //Mark as read?
                        payload: JSON.stringify({
                            thread_id: threadId,
                            last_read_watermark_ts: Date.now(),
                            sync_group: 1
                        }),
                        queue_name: threadId,
                        task_id: this.taskId++,
                        failure_count: null
                    }
                ],
                epoch_id: epoch
            })
        });
        if (result.status !== 200) throw new Error('There was an error while trying to sync group chat');
    }

    public static async sendMessage(thread: string, body: string) {
        const epoch = Math.floor(Date.now() / 1000);
        const random = Math.floor(Math.random() * 2 ** 22);
        const otid = epoch + random;

        const result = await ApiRequest.postWithGraphQL(DocumentId.LSPlatformGraphQLLightspeedRequestQuery, {
            deviceId: ApiRequest.apiStorage.deviceId,
            requestId: 0,
            requestType: 3,
            requestPayload: JSON.stringify({
                version_id: Version.LSVERSION, //LSversion
                tasks: [
                    {
                        label: '46', //SendMessage?
                        payload: JSON.stringify({
                            thread_id: thread,
                            otid: otid,
                            source: 0,
                            send_type: 1,
                            text: body,
                            initiating_source: 1
                        }),
                        queue_name: thread,
                        task_id: this.taskId++,
                        failure_count: null
                    }
                ],
                epoch_id: epoch
            })
        });
        if (result.status !== 200) throw new Error('There was an error while trying to sending message');
        this.syncGroupChatMessage(thread);
    }

    public static async sendFile(thread: string, file: string) {
        try {
            const metadata = await FileCdn.uploadFileToCdn(file);

            const epoch = Math.floor(Date.now() / 1000);
            const random = Math.floor(Math.random() * 2 ** 22);
            const otid = epoch + random;

            const result = await ApiRequest.postWithGraphQL(DocumentId.LSPlatformGraphQLLightspeedRequestQuery, {
                deviceId: ApiRequest.apiStorage.deviceId,
                requestId: 0,
                requestType: 3,
                requestPayload: JSON.stringify({
                    version_id: Version.LSVERSION, //LSversion
                    tasks: [
                        {
                            label: '46', //SendMessage?
                            payload: JSON.stringify({
                                thread_id: thread,
                                otid: otid,
                                source: 0,
                                send_type: 3,
                                sync_group: 1,
                                initiating_source: 1,
                                attachment_fbids: [metadata.fbid]
                            }),
                            queue_name: thread,
                            task_id: this.taskId++,
                            failure_count: null
                        }
                    ],
                    epoch_id: epoch
                })
            });
            if (result.status !== 200) throw new Error('There was an error while trying to sending message');
            this.syncGroupChatMessage(thread);
        } catch (error) {
            throw error;
        }
    }
}
