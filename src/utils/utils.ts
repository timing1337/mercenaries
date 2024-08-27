import { readFileSync } from 'fs';
import path from 'path';
import { TCompactProtocol, TFramedTransport } from 'thrift';
import { RtcMessageBody, RtcMessageHeader } from '../../codegen';
import VoiceCallManager from '../voicecall/voicecall_manager';

export enum URL {
    MESSENGER_URL = 'https://www.messenger.com/',
    LOGIN_URL = 'https://www.messenger.com/login/password',
    GRAPH_QL_URL = 'https://www.messenger.com/api/graphql/',
    FILE_CDN_URL = 'https://www.messenger.com/ajax/mercury/upload.php'
}

export enum Version {
    LSVERSION = '8454579147909252'
}

export function randomNumber() {
    return Math.floor(100000 + Math.random() * 900000);
}

export function parsePcap() {
    const file = JSON.parse(readFileSync(path.join(__dirname, '..', '..', 'data.json'), 'utf-8')) as {
        req: string;
        rsp: string;
    }[];

    file.forEach((data) => {
        const compactReq = new TCompactProtocol(new TFramedTransport(Buffer.from(data.req, 'base64')));
        VoiceCallManager.logger.debug(JSON.stringify(RtcMessageHeader.read(compactReq)));
        VoiceCallManager.logger.debug(JSON.stringify(RtcMessageBody.read(compactReq)));
    });
}
