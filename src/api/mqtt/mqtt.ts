import { MessageData } from '../message/message';

export interface TMSData {
    deltas: MessageData[];
    firstDeltaSeqId: number;
    lastIssuedSeqId: number;
    queueEntityId: number;
}
