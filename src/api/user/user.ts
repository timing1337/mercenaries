import { Uri } from '../utils/timestamp';

export interface UserId {
    id: string;
}
export interface UserData {
    id: string;
    __typename: string;
    name: string;
    gender: string;
    url: string;
    big_image_src: Uri;
    short_name: string;
    username: string;
    is_viewer_friend: boolean;
    is_messenger_user: boolean;
    is_message_blocked_by_viewer: boolean;
    is_viewer_coworker: boolean;
    is_employee: any;
    is_aloha_proxy_confirmed: boolean;
    scim_company_user: any;
    work_info: any;
    work_foreign_entity_info: any;
}
