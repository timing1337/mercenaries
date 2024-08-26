export interface MessageData {
    attachments: any[];
    body: string;
    data: {
        prng: string;
        eitm_timestamp: Date;
    };
    irisSeqId: string;
    irisTags: string[];
    messageMetadata: MessageMetadata;
    participants: string[];
    requestContext: {
        threadFbId: string;
    };
    tqSeqId: string;
    class: string;
}

export interface MessageMetadata {
    actorFbId: string;
    cid: {
        conversationFbid: string;
    };
    folderId: {
        systemFolderId: string;
    };
    messageId: string;
    offlineThreadingId: string;
    tags: string[];
    threadKey: {
        threadFbId: string;
    };
    threadReadStateEffect: string;
    threadSubtype: number;
    timestamp: string;
    unsendType: string;
    skipBumpThread: boolean;
}

export interface MentionData {
    o: number;
    l: number;
    i: string;
    t: string;
}
