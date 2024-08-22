import ApiRequest from '../api/api';
import MercenariesBot from '../core';
import { DocumentId } from '../api/document';

export class MessageManager {
    public static taskId: number = 0;

    public static async sendMessage(thread: string, body: string) {
        const now = Date.now();

        const epoch = Math.floor(new Date().getTime() / 1000);
        const random = Math.floor(Math.random() * 2 ** 22);
        const otid = epoch + random;

        const result = await ApiRequest.postWithGraphQL(DocumentId.LSPlatformGraphQLLightspeedRequestQuery, {
            deviceId: MercenariesBot.deviceId,
            requestId: 0,
            requestType: 3,
            requestPayload: JSON.stringify({
                version_id: '8454579147909252', //LSversion
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
                    },
                    {
                        label: '21', //Mark as read?
                        payload: JSON.stringify({
                            thread_id: thread,
                            last_read_watermark_ts: now,
                            sync_group: 1
                        }),
                        queue_name: thread,
                        task_id: this.taskId++,
                        failure_count: null
                    }
                ],
                epoch_id: epoch
            })
        });
    }
}
