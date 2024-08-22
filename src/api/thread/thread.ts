import ApiRequest from '../api';
import { DocumentId } from '../document';
import { UserData, UserId } from '../user/user';
import { Timestamp } from '../utils/timestamp';

export interface ThreadData {
    threads: Thread[];
    sync_sequence_id: number;
}

export default class ThreadGraphQl {
    public static async getThreadsData(): Promise<ThreadData> {
        const data = await ApiRequest.postWithGraphQL(DocumentId.GetThreadList, {
            includeDeliveryReceipts: true,
            includeSeqID: true
        });
        const res = data.data['data']['viewer']['message_threads'];
        return {
            sync_sequence_id: res['sync_sequence_id'],
            threads: res['nodes']
        };
    }
}

export interface Thread {
    id: string;
    thread_key: {
        thread_fbid: string;
        other_user_id: any;
    };
    name: string;
    last_message: {
        nodes: MessageNode[];
    };
    thread_connectivity_data: any;
    thread_associated_job_applications: ThreadAssociatedJobApplications; //?
    thread_associated_page_admin: any; //?
    unread_count: number;
    messages_count: number;
    square_image: any;
    image: any;
    updated_time_precise: string;
    mute_until: any;
    is_pin_protected: boolean;
    is_pinned: boolean;
    is_viewer_subscribed: boolean;
    is_other_recipient_page: boolean;
    thread_queue_enabled: boolean;
    folder: string;
    has_viewer_archived: boolean;
    is_page_follow_up: boolean;
    is_page_unresponded_thread: any;
    cannot_reply_reason: any;
    can_viewer_report: boolean;
    composer_input_disabled: any;
    ephemeral_ttl_mode: number;
    customization_info: any;
    thread_theme: any;
    thread_admins: UserId[];
    approval_mode: number;
    joinable_mode: {
        mode: string;
        link: string;
    };
    group_approval_queue: GroupApprovalQueue;
    thread_queue_metadata: ThreadQueueMetadata;
    event_reminders: EventReminders;
    montage_thread: any;
    last_read_receipt: {
        nodes: Timestamp[];
    };
    related_page_thread: any;
    rtc_call_data: RtcCallData;
    marketplace_thread_data: MarketplaceThreadData;
    associated_object: any;
    privacy_mode: number;
    reactions_mute_mode: string;
    mentions_mute_mode: string;
    customization_enabled: boolean;
    thread_type: string;
    group_thread_subtype: string;
    participant_add_mode_as_string: string;
    is_canonical_neo_user: boolean;
    participants_event_status: any[];
    page_comm_item: any;
    admin_model_status_string: string;
    groups_sync_status_string: string;
    groups_sync_metadata: any;
    pinned_messages: any[];
    work_groups_sync_metadata: any;
    saved_messages: any[];
    description: any;
    joinable_link: any;
    is_fuss_red_page: boolean;
    linked_mentorship_programs: LinkedMentorshipPrograms;
    thread_unsendability_status: string;
    thread_pin_timestamp: number;
    is_business_page_active: boolean;
    conversion_detection_data: any;
    suggested_reply_data: any;
    all_participants: {
        edges: ParticipantData[];
    };
    read_receipts: {
        nodes: ReadReceipt[];
    };
    delivery_receipts: {
        nodes: Timestamp[];
    };
}

export interface MessageNode {
    snippet: string;
    message_sender: {
        messaging_actor: UserId;
    };
    timestamp_precise: string;
    commerce_message_type: any;
    extensible_attachment: any;
    sticker: any;
    blob_attachments: any[];
    platform_xmd_encoded: any;
    message_unsendability_status: string;
}

export interface ThreadAssociatedJobApplications {
    nodes: any[];
}

export interface GroupApprovalQueue {
    nodes: any[];
}

export interface ThreadQueueMetadata {
    approval_requests: ApprovalRequests;
}

export interface ApprovalRequests {
    nodes: any[];
}

export interface EventReminders {
    nodes: any[];
}

export interface RtcCallData {
    call_state: string;
    server_info_data: string;
    initiator: any;
}

export interface MarketplaceThreadData {
    for_sale_item: any;
    rating_state: any;
    buyer: any;
    seller: any;
    seller_added_labels: any[];
    eligible_profile_selling_invoice_actions: any[];
}

export interface LinkedMentorshipPrograms {
    nodes: any[];
}

export interface ParticipantData {
    admin_type: any;
    node: {
        messaging_actor: UserData;
    };
}

export interface ReadReceipt {
    watermark: string;
    action: string;
    actor: UserId;
}
