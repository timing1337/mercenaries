import { writeFileSync } from 'fs';
import { TCompactProtocol, TFramedTransport } from 'thrift';
import { RtcMessageBody, RtcMessageHeader } from '../codegen';
import ApiRequest from './api/api';
import { CommandManager } from './command/command_manager';
import { MqttManager } from './mqtt/mqtt_manager';
import ThreadManager from './thread/thread_manager';

export default class MercenariesBot {
    public static init() {
        ApiRequest.init().then(async () => {
            await ThreadManager.init();
            await CommandManager.init();
            await MqttManager.init();
        });
    }

    public static decodePayload(id: number, req: string, rsp: string) {
        const compactReq = new TCompactProtocol(new TFramedTransport(Buffer.from(req, 'base64')));
        const compactRsp = new TCompactProtocol(new TFramedTransport(Buffer.from(rsp, 'base64')));
        writeFileSync(
            `${id}.json`,
            JSON.stringify(
                {
                    req: {
                        header: RtcMessageHeader.read(compactReq),
                        body: RtcMessageBody.read(compactReq)
                    },
                    rsp: {
                        header: RtcMessageHeader.read(compactRsp),
                        body: RtcMessageBody.read(compactRsp)
                    }
                },
                null,
                4
            )
        );
    }
}
