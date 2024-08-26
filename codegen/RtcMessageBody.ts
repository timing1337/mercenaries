/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as JoinRequest from "./JoinRequest";
import * as JoinResponse from "./JoinResponse";
import * as ServerMediaUpdateRequest from "./ServerMediaUpdateRequest";
import * as ServerMediaUpdateResponse from "./ServerMediaUpdateResponse";
import * as HangupRequest from "./HangupRequest";
import * as IceCandidateRequest from "./IceCandidateRequest";
import * as RingRequest from "./RingRequest";
import * as RingResponse from "./RingResponse";
import * as DismissRequest from "./DismissRequest";
import * as ConferenceStateRequest from "./ConferenceStateRequest";
import * as ConferenceStateResponse from "./ConferenceStateResponse";
import * as AddParticipantsRequest from "./AddParticipantsRequest";
import * as SubscriptionRequest from "./SubscriptionRequest";
import * as ClientMediaUpdateRequest from "./ClientMediaUpdateRequest";
import * as ClientMediaUpdateResponse from "./ClientMediaUpdateResponse";
import * as DataMessageRequest from "./DataMessageRequest";
import * as RemoveParticipantsRequest from "./RemoveParticipantsRequest";
import * as DataMessageResponse from "./DataMessageResponse";
import * as P2PMessageRequest from "./P2PMessageRequest";
import * as UpdateRequest from "./UpdateRequest";
import * as UpdateResponse from "./UpdateResponse";
import * as NotifyRequest from "./NotifyRequest";
import * as NotifyResponse from "./NotifyResponse";
import * as ConnectRequest from "./ConnectRequest";
import * as ConnectResponse from "./ConnectResponse";
import * as ClientEventRequest from "./ClientEventRequest";
import * as ClientEventResponse from "./ClientEventResponse";
import * as UnsubscribeRequest from "./UnsubscribeRequest";
import * as UnsubscribeResponse from "./UnsubscribeResponse";
import * as ApprovalRequest from "./ApprovalRequest";
import * as TransferRequest from "./TransferRequest";
export interface IRtcMessageBodyArgs {
    joinRequest?: JoinRequest.JoinRequest;
    joinResponse?: JoinResponse.JoinResponse;
    serverMediaUpdateRequest?: ServerMediaUpdateRequest.ServerMediaUpdateRequest;
    serverMediaUpdateResponse?: ServerMediaUpdateResponse.ServerMediaUpdateResponse;
    hangupRequest?: HangupRequest.HangupRequest;
    iceCandidateRequest?: IceCandidateRequest.IceCandidateRequest;
    ringRequest?: RingRequest.RingRequest;
    ringResponse?: RingResponse.RingResponse;
    dismissRequest?: DismissRequest.DismissRequest;
    conferenceStateRequest?: ConferenceStateRequest.ConferenceStateRequest;
    conferenceStateResponse?: ConferenceStateResponse.ConferenceStateResponse;
    addParticipantsRequest?: AddParticipantsRequest.AddParticipantsRequest;
    subscriptionRequest?: SubscriptionRequest.SubscriptionRequest;
    clientMediaUpdateRequest?: ClientMediaUpdateRequest.ClientMediaUpdateRequest;
    clientMediaUpdateResponse?: ClientMediaUpdateResponse.ClientMediaUpdateResponse;
    dataMessageRequest?: DataMessageRequest.DataMessageRequest;
    removeParticipantsRequest?: RemoveParticipantsRequest.RemoveParticipantsRequest;
    dataMessageResponse?: DataMessageResponse.DataMessageResponse;
    p2pMessageRequest?: P2PMessageRequest.P2PMessageRequest;
    updateRequest?: UpdateRequest.UpdateRequest;
    updateResponse?: UpdateResponse.UpdateResponse;
    notifyRequest?: NotifyRequest.NotifyRequest;
    notifyResponse?: NotifyResponse.NotifyResponse;
    connectRequest?: ConnectRequest.ConnectRequest;
    connectResponse?: ConnectResponse.ConnectResponse;
    clientEventRequest?: ClientEventRequest.ClientEventRequest;
    clientEventResponse?: ClientEventResponse.ClientEventResponse;
    unsubscribeRequest?: UnsubscribeRequest.UnsubscribeRequest;
    unsubscribeResponse?: UnsubscribeResponse.UnsubscribeResponse;
    approvalRequest?: ApprovalRequest.ApprovalRequest;
    transferRequest?: TransferRequest.TransferRequest;
}
export class RtcMessageBody {
    public joinRequest?: JoinRequest.JoinRequest;
    public joinResponse?: JoinResponse.JoinResponse;
    public serverMediaUpdateRequest?: ServerMediaUpdateRequest.ServerMediaUpdateRequest;
    public serverMediaUpdateResponse?: ServerMediaUpdateResponse.ServerMediaUpdateResponse;
    public hangupRequest?: HangupRequest.HangupRequest;
    public iceCandidateRequest?: IceCandidateRequest.IceCandidateRequest;
    public ringRequest?: RingRequest.RingRequest;
    public ringResponse?: RingResponse.RingResponse;
    public dismissRequest?: DismissRequest.DismissRequest;
    public conferenceStateRequest?: ConferenceStateRequest.ConferenceStateRequest;
    public conferenceStateResponse?: ConferenceStateResponse.ConferenceStateResponse;
    public addParticipantsRequest?: AddParticipantsRequest.AddParticipantsRequest;
    public subscriptionRequest?: SubscriptionRequest.SubscriptionRequest;
    public clientMediaUpdateRequest?: ClientMediaUpdateRequest.ClientMediaUpdateRequest;
    public clientMediaUpdateResponse?: ClientMediaUpdateResponse.ClientMediaUpdateResponse;
    public dataMessageRequest?: DataMessageRequest.DataMessageRequest;
    public removeParticipantsRequest?: RemoveParticipantsRequest.RemoveParticipantsRequest;
    public dataMessageResponse?: DataMessageResponse.DataMessageResponse;
    public p2pMessageRequest?: P2PMessageRequest.P2PMessageRequest;
    public updateRequest?: UpdateRequest.UpdateRequest;
    public updateResponse?: UpdateResponse.UpdateResponse;
    public notifyRequest?: NotifyRequest.NotifyRequest;
    public notifyResponse?: NotifyResponse.NotifyResponse;
    public connectRequest?: ConnectRequest.ConnectRequest;
    public connectResponse?: ConnectResponse.ConnectResponse;
    public clientEventRequest?: ClientEventRequest.ClientEventRequest;
    public clientEventResponse?: ClientEventResponse.ClientEventResponse;
    public unsubscribeRequest?: UnsubscribeRequest.UnsubscribeRequest;
    public unsubscribeResponse?: UnsubscribeResponse.UnsubscribeResponse;
    public approvalRequest?: ApprovalRequest.ApprovalRequest;
    public transferRequest?: TransferRequest.TransferRequest;
    constructor(args?: IRtcMessageBodyArgs) {
        if (args != null && args.joinRequest != null) {
            this.joinRequest = args.joinRequest;
        }
        if (args != null && args.joinResponse != null) {
            this.joinResponse = args.joinResponse;
        }
        if (args != null && args.serverMediaUpdateRequest != null) {
            this.serverMediaUpdateRequest = args.serverMediaUpdateRequest;
        }
        if (args != null && args.serverMediaUpdateResponse != null) {
            this.serverMediaUpdateResponse = args.serverMediaUpdateResponse;
        }
        if (args != null && args.hangupRequest != null) {
            this.hangupRequest = args.hangupRequest;
        }
        if (args != null && args.iceCandidateRequest != null) {
            this.iceCandidateRequest = args.iceCandidateRequest;
        }
        if (args != null && args.ringRequest != null) {
            this.ringRequest = args.ringRequest;
        }
        if (args != null && args.ringResponse != null) {
            this.ringResponse = args.ringResponse;
        }
        if (args != null && args.dismissRequest != null) {
            this.dismissRequest = args.dismissRequest;
        }
        if (args != null && args.conferenceStateRequest != null) {
            this.conferenceStateRequest = args.conferenceStateRequest;
        }
        if (args != null && args.conferenceStateResponse != null) {
            this.conferenceStateResponse = args.conferenceStateResponse;
        }
        if (args != null && args.addParticipantsRequest != null) {
            this.addParticipantsRequest = args.addParticipantsRequest;
        }
        if (args != null && args.subscriptionRequest != null) {
            this.subscriptionRequest = args.subscriptionRequest;
        }
        if (args != null && args.clientMediaUpdateRequest != null) {
            this.clientMediaUpdateRequest = args.clientMediaUpdateRequest;
        }
        if (args != null && args.clientMediaUpdateResponse != null) {
            this.clientMediaUpdateResponse = args.clientMediaUpdateResponse;
        }
        if (args != null && args.dataMessageRequest != null) {
            this.dataMessageRequest = args.dataMessageRequest;
        }
        if (args != null && args.removeParticipantsRequest != null) {
            this.removeParticipantsRequest = args.removeParticipantsRequest;
        }
        if (args != null && args.dataMessageResponse != null) {
            this.dataMessageResponse = args.dataMessageResponse;
        }
        if (args != null && args.p2pMessageRequest != null) {
            this.p2pMessageRequest = args.p2pMessageRequest;
        }
        if (args != null && args.updateRequest != null) {
            this.updateRequest = args.updateRequest;
        }
        if (args != null && args.updateResponse != null) {
            this.updateResponse = args.updateResponse;
        }
        if (args != null && args.notifyRequest != null) {
            this.notifyRequest = args.notifyRequest;
        }
        if (args != null && args.notifyResponse != null) {
            this.notifyResponse = args.notifyResponse;
        }
        if (args != null && args.connectRequest != null) {
            this.connectRequest = args.connectRequest;
        }
        if (args != null && args.connectResponse != null) {
            this.connectResponse = args.connectResponse;
        }
        if (args != null && args.clientEventRequest != null) {
            this.clientEventRequest = args.clientEventRequest;
        }
        if (args != null && args.clientEventResponse != null) {
            this.clientEventResponse = args.clientEventResponse;
        }
        if (args != null && args.unsubscribeRequest != null) {
            this.unsubscribeRequest = args.unsubscribeRequest;
        }
        if (args != null && args.unsubscribeResponse != null) {
            this.unsubscribeResponse = args.unsubscribeResponse;
        }
        if (args != null && args.approvalRequest != null) {
            this.approvalRequest = args.approvalRequest;
        }
        if (args != null && args.transferRequest != null) {
            this.transferRequest = args.transferRequest;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("RtcMessageBody");
        if (this.joinRequest != null) {
            output.writeFieldBegin("joinRequest", thrift.Thrift.Type.STRUCT, 1);
            this.joinRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.joinResponse != null) {
            output.writeFieldBegin("joinResponse", thrift.Thrift.Type.STRUCT, 2);
            this.joinResponse.write(output);
            output.writeFieldEnd();
        }
        if (this.serverMediaUpdateRequest != null) {
            output.writeFieldBegin("serverMediaUpdateRequest", thrift.Thrift.Type.STRUCT, 3);
            this.serverMediaUpdateRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.serverMediaUpdateResponse != null) {
            output.writeFieldBegin("serverMediaUpdateResponse", thrift.Thrift.Type.STRUCT, 4);
            this.serverMediaUpdateResponse.write(output);
            output.writeFieldEnd();
        }
        if (this.hangupRequest != null) {
            output.writeFieldBegin("hangupRequest", thrift.Thrift.Type.STRUCT, 5);
            this.hangupRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.iceCandidateRequest != null) {
            output.writeFieldBegin("iceCandidateRequest", thrift.Thrift.Type.STRUCT, 6);
            this.iceCandidateRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.ringRequest != null) {
            output.writeFieldBegin("ringRequest", thrift.Thrift.Type.STRUCT, 8);
            this.ringRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.ringResponse != null) {
            output.writeFieldBegin("ringResponse", thrift.Thrift.Type.STRUCT, 9);
            this.ringResponse.write(output);
            output.writeFieldEnd();
        }
        if (this.dismissRequest != null) {
            output.writeFieldBegin("dismissRequest", thrift.Thrift.Type.STRUCT, 10);
            this.dismissRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.conferenceStateRequest != null) {
            output.writeFieldBegin("conferenceStateRequest", thrift.Thrift.Type.STRUCT, 11);
            this.conferenceStateRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.conferenceStateResponse != null) {
            output.writeFieldBegin("conferenceStateResponse", thrift.Thrift.Type.STRUCT, 12);
            this.conferenceStateResponse.write(output);
            output.writeFieldEnd();
        }
        if (this.addParticipantsRequest != null) {
            output.writeFieldBegin("addParticipantsRequest", thrift.Thrift.Type.STRUCT, 13);
            this.addParticipantsRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.subscriptionRequest != null) {
            output.writeFieldBegin("subscriptionRequest", thrift.Thrift.Type.STRUCT, 14);
            this.subscriptionRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.clientMediaUpdateRequest != null) {
            output.writeFieldBegin("clientMediaUpdateRequest", thrift.Thrift.Type.STRUCT, 15);
            this.clientMediaUpdateRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.clientMediaUpdateResponse != null) {
            output.writeFieldBegin("clientMediaUpdateResponse", thrift.Thrift.Type.STRUCT, 16);
            this.clientMediaUpdateResponse.write(output);
            output.writeFieldEnd();
        }
        if (this.dataMessageRequest != null) {
            output.writeFieldBegin("dataMessageRequest", thrift.Thrift.Type.STRUCT, 17);
            this.dataMessageRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.removeParticipantsRequest != null) {
            output.writeFieldBegin("removeParticipantsRequest", thrift.Thrift.Type.STRUCT, 18);
            this.removeParticipantsRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.dataMessageResponse != null) {
            output.writeFieldBegin("dataMessageResponse", thrift.Thrift.Type.STRUCT, 19);
            this.dataMessageResponse.write(output);
            output.writeFieldEnd();
        }
        if (this.p2pMessageRequest != null) {
            output.writeFieldBegin("p2pMessageRequest", thrift.Thrift.Type.STRUCT, 29);
            this.p2pMessageRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.updateRequest != null) {
            output.writeFieldBegin("updateRequest", thrift.Thrift.Type.STRUCT, 30);
            this.updateRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.updateResponse != null) {
            output.writeFieldBegin("updateResponse", thrift.Thrift.Type.STRUCT, 31);
            this.updateResponse.write(output);
            output.writeFieldEnd();
        }
        if (this.notifyRequest != null) {
            output.writeFieldBegin("notifyRequest", thrift.Thrift.Type.STRUCT, 32);
            this.notifyRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.notifyResponse != null) {
            output.writeFieldBegin("notifyResponse", thrift.Thrift.Type.STRUCT, 33);
            this.notifyResponse.write(output);
            output.writeFieldEnd();
        }
        if (this.connectRequest != null) {
            output.writeFieldBegin("connectRequest", thrift.Thrift.Type.STRUCT, 34);
            this.connectRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.connectResponse != null) {
            output.writeFieldBegin("connectResponse", thrift.Thrift.Type.STRUCT, 35);
            this.connectResponse.write(output);
            output.writeFieldEnd();
        }
        if (this.clientEventRequest != null) {
            output.writeFieldBegin("clientEventRequest", thrift.Thrift.Type.STRUCT, 36);
            this.clientEventRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.clientEventResponse != null) {
            output.writeFieldBegin("clientEventResponse", thrift.Thrift.Type.STRUCT, 37);
            this.clientEventResponse.write(output);
            output.writeFieldEnd();
        }
        if (this.unsubscribeRequest != null) {
            output.writeFieldBegin("unsubscribeRequest", thrift.Thrift.Type.STRUCT, 40);
            this.unsubscribeRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.unsubscribeResponse != null) {
            output.writeFieldBegin("unsubscribeResponse", thrift.Thrift.Type.STRUCT, 41);
            this.unsubscribeResponse.write(output);
            output.writeFieldEnd();
        }
        if (this.approvalRequest != null) {
            output.writeFieldBegin("approvalRequest", thrift.Thrift.Type.STRUCT, 42);
            this.approvalRequest.write(output);
            output.writeFieldEnd();
        }
        if (this.transferRequest != null) {
            output.writeFieldBegin("transferRequest", thrift.Thrift.Type.STRUCT, 43);
            this.transferRequest.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): RtcMessageBody {
        input.readStructBegin();
        let _args: any = {};
        while (true) {
            const ret: thrift.TField = input.readFieldBegin();
            const fieldType: thrift.Thrift.Type = ret.ftype;
            const fieldId: number = ret.fid;
            if (fieldType === thrift.Thrift.Type.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_1: JoinRequest.JoinRequest = JoinRequest.JoinRequest.read(input);
                        _args.joinRequest = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_2: JoinResponse.JoinResponse = JoinResponse.JoinResponse.read(input);
                        _args.joinResponse = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_3: ServerMediaUpdateRequest.ServerMediaUpdateRequest = ServerMediaUpdateRequest.ServerMediaUpdateRequest.read(input);
                        _args.serverMediaUpdateRequest = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_4: ServerMediaUpdateResponse.ServerMediaUpdateResponse = ServerMediaUpdateResponse.ServerMediaUpdateResponse.read(input);
                        _args.serverMediaUpdateResponse = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_5: HangupRequest.HangupRequest = HangupRequest.HangupRequest.read(input);
                        _args.hangupRequest = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_6: IceCandidateRequest.IceCandidateRequest = IceCandidateRequest.IceCandidateRequest.read(input);
                        _args.iceCandidateRequest = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_7: RingRequest.RingRequest = RingRequest.RingRequest.read(input);
                        _args.ringRequest = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_8: RingResponse.RingResponse = RingResponse.RingResponse.read(input);
                        _args.ringResponse = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 10:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_9: DismissRequest.DismissRequest = DismissRequest.DismissRequest.read(input);
                        _args.dismissRequest = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 11:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_10: ConferenceStateRequest.ConferenceStateRequest = ConferenceStateRequest.ConferenceStateRequest.read(input);
                        _args.conferenceStateRequest = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 12:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_11: ConferenceStateResponse.ConferenceStateResponse = ConferenceStateResponse.ConferenceStateResponse.read(input);
                        _args.conferenceStateResponse = value_11;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 13:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_12: AddParticipantsRequest.AddParticipantsRequest = AddParticipantsRequest.AddParticipantsRequest.read(input);
                        _args.addParticipantsRequest = value_12;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 14:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_13: SubscriptionRequest.SubscriptionRequest = SubscriptionRequest.SubscriptionRequest.read(input);
                        _args.subscriptionRequest = value_13;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 15:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_14: ClientMediaUpdateRequest.ClientMediaUpdateRequest = ClientMediaUpdateRequest.ClientMediaUpdateRequest.read(input);
                        _args.clientMediaUpdateRequest = value_14;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 16:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_15: ClientMediaUpdateResponse.ClientMediaUpdateResponse = ClientMediaUpdateResponse.ClientMediaUpdateResponse.read(input);
                        _args.clientMediaUpdateResponse = value_15;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 17:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_16: DataMessageRequest.DataMessageRequest = DataMessageRequest.DataMessageRequest.read(input);
                        _args.dataMessageRequest = value_16;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 18:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_17: RemoveParticipantsRequest.RemoveParticipantsRequest = RemoveParticipantsRequest.RemoveParticipantsRequest.read(input);
                        _args.removeParticipantsRequest = value_17;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 19:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_18: DataMessageResponse.DataMessageResponse = DataMessageResponse.DataMessageResponse.read(input);
                        _args.dataMessageResponse = value_18;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 29:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_19: P2PMessageRequest.P2PMessageRequest = P2PMessageRequest.P2PMessageRequest.read(input);
                        _args.p2pMessageRequest = value_19;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 30:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_20: UpdateRequest.UpdateRequest = UpdateRequest.UpdateRequest.read(input);
                        _args.updateRequest = value_20;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 31:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_21: UpdateResponse.UpdateResponse = UpdateResponse.UpdateResponse.read(input);
                        _args.updateResponse = value_21;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 32:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_22: NotifyRequest.NotifyRequest = NotifyRequest.NotifyRequest.read(input);
                        _args.notifyRequest = value_22;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 33:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_23: NotifyResponse.NotifyResponse = NotifyResponse.NotifyResponse.read(input);
                        _args.notifyResponse = value_23;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 34:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_24: ConnectRequest.ConnectRequest = ConnectRequest.ConnectRequest.read(input);
                        _args.connectRequest = value_24;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 35:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_25: ConnectResponse.ConnectResponse = ConnectResponse.ConnectResponse.read(input);
                        _args.connectResponse = value_25;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 36:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_26: ClientEventRequest.ClientEventRequest = ClientEventRequest.ClientEventRequest.read(input);
                        _args.clientEventRequest = value_26;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 37:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_27: ClientEventResponse.ClientEventResponse = ClientEventResponse.ClientEventResponse.read(input);
                        _args.clientEventResponse = value_27;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 40:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_28: UnsubscribeRequest.UnsubscribeRequest = UnsubscribeRequest.UnsubscribeRequest.read(input);
                        _args.unsubscribeRequest = value_28;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 41:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_29: UnsubscribeResponse.UnsubscribeResponse = UnsubscribeResponse.UnsubscribeResponse.read(input);
                        _args.unsubscribeResponse = value_29;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 42:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_30: ApprovalRequest.ApprovalRequest = ApprovalRequest.ApprovalRequest.read(input);
                        _args.approvalRequest = value_30;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 43:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_31: TransferRequest.TransferRequest = TransferRequest.TransferRequest.read(input);
                        _args.transferRequest = value_31;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return new RtcMessageBody(_args);
    }
}