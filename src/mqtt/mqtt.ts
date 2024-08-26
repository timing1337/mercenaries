import { MessageData, MessageMetadata } from '../message/message';

export interface TMSData {
    deltas: MessageData[] | RtcCallData[];
    firstDeltaSeqId: number;
    lastIssuedSeqId: number;
    queueEntityId: number;
    syncToken: string;
}

export interface RtcCallData {
    callState: string;
    messageMetadata: MessageMetadata;
    class: string;
    serverInfoData: string;
}
