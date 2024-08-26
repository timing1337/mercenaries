/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
import * as SessionDescription from "./SessionDescription";
import * as DataMessage from "./DataMessage";
import * as ClientMediaStatus from "./ClientMediaStatus";
import * as SyncPayload from "./SyncPayload";
import * as E2eeEnforcement from "./E2eeEnforcement";
import * as SfuAllocation from "./SfuAllocation";
import * as EndpointSettings from "./EndpointSettings";
export interface IJoinRequestArgs {
    offer?: SessionDescription.SessionDescription;
    deviceCapabilities?: Set<number>;
    usersToCall?: Set<string>;
    mediaStatus?: Map<string, boolean>;
    userCapabilities?: string;
    supportedExperiments?: string;
    appMessages?: Array<DataMessage.DataMessage>;
    userToEscalate?: string;
    escalatingCallId?: number | Int64;
    conferenceType?: number;
    mediaStatusEx?: ClientMediaStatus.ClientMediaStatus;
    answer?: SessionDescription.SessionDescription;
    syncPayload?: SyncPayload.SyncPayload;
    usersToApproveFromWaitingRoom?: Set<string>;
    e2eeEnforcement?: E2eeEnforcement.E2eeEnforcement;
    sfuAllocation?: SfuAllocation.SfuAllocation;
    clientMediaMode?: number;
    endpointSettings?: EndpointSettings.EndpointSettings;
    backupSfuAllocation?: SfuAllocation.SfuAllocation;
    supportedCustomVideoContentTypes?: Set<number>;
    configIntegrityOpaqueToken?: number;
}
export class JoinRequest {
    public offer?: SessionDescription.SessionDescription;
    public deviceCapabilities?: Set<number>;
    public usersToCall?: Set<string>;
    public mediaStatus?: Map<string, boolean>;
    public userCapabilities?: string;
    public supportedExperiments?: string;
    public appMessages?: Array<DataMessage.DataMessage>;
    public userToEscalate?: string;
    public escalatingCallId?: Int64;
    public conferenceType?: number;
    public mediaStatusEx?: ClientMediaStatus.ClientMediaStatus;
    public answer?: SessionDescription.SessionDescription;
    public syncPayload?: SyncPayload.SyncPayload;
    public usersToApproveFromWaitingRoom?: Set<string>;
    public e2eeEnforcement?: E2eeEnforcement.E2eeEnforcement;
    public sfuAllocation?: SfuAllocation.SfuAllocation;
    public clientMediaMode?: number;
    public endpointSettings?: EndpointSettings.EndpointSettings;
    public backupSfuAllocation?: SfuAllocation.SfuAllocation;
    public supportedCustomVideoContentTypes?: Set<number>;
    public configIntegrityOpaqueToken?: number;
    constructor(args?: IJoinRequestArgs) {
        if (args != null && args.offer != null) {
            this.offer = args.offer;
        }
        if (args != null && args.deviceCapabilities != null) {
            this.deviceCapabilities = args.deviceCapabilities;
        }
        if (args != null && args.usersToCall != null) {
            this.usersToCall = args.usersToCall;
        }
        if (args != null && args.mediaStatus != null) {
            this.mediaStatus = args.mediaStatus;
        }
        if (args != null && args.userCapabilities != null) {
            this.userCapabilities = args.userCapabilities;
        }
        if (args != null && args.supportedExperiments != null) {
            this.supportedExperiments = args.supportedExperiments;
        }
        if (args != null && args.appMessages != null) {
            this.appMessages = args.appMessages;
        }
        if (args != null && args.userToEscalate != null) {
            this.userToEscalate = args.userToEscalate;
        }
        if (args != null && args.escalatingCallId != null) {
            if (typeof args.escalatingCallId === "number") {
                this.escalatingCallId = new Int64(args.escalatingCallId);
            }
            else {
                this.escalatingCallId = args.escalatingCallId;
            }
        }
        if (args != null && args.conferenceType != null) {
            this.conferenceType = args.conferenceType;
        }
        if (args != null && args.mediaStatusEx != null) {
            this.mediaStatusEx = args.mediaStatusEx;
        }
        if (args != null && args.answer != null) {
            this.answer = args.answer;
        }
        if (args != null && args.syncPayload != null) {
            this.syncPayload = args.syncPayload;
        }
        if (args != null && args.usersToApproveFromWaitingRoom != null) {
            this.usersToApproveFromWaitingRoom = args.usersToApproveFromWaitingRoom;
        }
        if (args != null && args.e2eeEnforcement != null) {
            this.e2eeEnforcement = args.e2eeEnforcement;
        }
        if (args != null && args.sfuAllocation != null) {
            this.sfuAllocation = args.sfuAllocation;
        }
        if (args != null && args.clientMediaMode != null) {
            this.clientMediaMode = args.clientMediaMode;
        }
        if (args != null && args.endpointSettings != null) {
            this.endpointSettings = args.endpointSettings;
        }
        if (args != null && args.backupSfuAllocation != null) {
            this.backupSfuAllocation = args.backupSfuAllocation;
        }
        if (args != null && args.supportedCustomVideoContentTypes != null) {
            this.supportedCustomVideoContentTypes = args.supportedCustomVideoContentTypes;
        }
        if (args != null && args.configIntegrityOpaqueToken != null) {
            this.configIntegrityOpaqueToken = args.configIntegrityOpaqueToken;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("JoinRequest");
        if (this.offer != null) {
            output.writeFieldBegin("offer", thrift.Thrift.Type.STRUCT, 1);
            this.offer.write(output);
            output.writeFieldEnd();
        }
        if (this.deviceCapabilities != null) {
            output.writeFieldBegin("deviceCapabilities", thrift.Thrift.Type.SET, 2);
            output.writeSetBegin(thrift.Thrift.Type.I32, this.deviceCapabilities.size);
            this.deviceCapabilities.forEach((value_1: number): void => {
                output.writeI32(value_1);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        if (this.usersToCall != null) {
            output.writeFieldBegin("usersToCall", thrift.Thrift.Type.SET, 3);
            output.writeSetBegin(thrift.Thrift.Type.STRING, this.usersToCall.size);
            this.usersToCall.forEach((value_2: string): void => {
                output.writeString(value_2);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        if (this.mediaStatus != null) {
            output.writeFieldBegin("mediaStatus", thrift.Thrift.Type.MAP, 4);
            output.writeMapBegin(thrift.Thrift.Type.STRING, thrift.Thrift.Type.BOOL, this.mediaStatus.size);
            this.mediaStatus.forEach((value_3: boolean, key_1: string): void => {
                output.writeString(key_1);
                output.writeBool(value_3);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        if (this.userCapabilities != null) {
            output.writeFieldBegin("userCapabilities", thrift.Thrift.Type.STRING, 5);
            output.writeString(this.userCapabilities);
            output.writeFieldEnd();
        }
        if (this.supportedExperiments != null) {
            output.writeFieldBegin("supportedExperiments", thrift.Thrift.Type.STRING, 6);
            output.writeString(this.supportedExperiments);
            output.writeFieldEnd();
        }
        if (this.appMessages != null) {
            output.writeFieldBegin("appMessages", thrift.Thrift.Type.LIST, 9);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.appMessages.length);
            this.appMessages.forEach((value_4: DataMessage.DataMessage): void => {
                value_4.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.userToEscalate != null) {
            output.writeFieldBegin("userToEscalate", thrift.Thrift.Type.STRING, 10);
            output.writeString(this.userToEscalate);
            output.writeFieldEnd();
        }
        if (this.escalatingCallId != null) {
            output.writeFieldBegin("escalatingCallId", thrift.Thrift.Type.I64, 11);
            output.writeI64(this.escalatingCallId);
            output.writeFieldEnd();
        }
        if (this.conferenceType != null) {
            output.writeFieldBegin("conferenceType", thrift.Thrift.Type.I32, 12);
            output.writeI32(this.conferenceType);
            output.writeFieldEnd();
        }
        if (this.mediaStatusEx != null) {
            output.writeFieldBegin("mediaStatusEx", thrift.Thrift.Type.STRUCT, 13);
            this.mediaStatusEx.write(output);
            output.writeFieldEnd();
        }
        if (this.answer != null) {
            output.writeFieldBegin("answer", thrift.Thrift.Type.STRUCT, 14);
            this.answer.write(output);
            output.writeFieldEnd();
        }
        if (this.syncPayload != null) {
            output.writeFieldBegin("syncPayload", thrift.Thrift.Type.STRUCT, 15);
            this.syncPayload.write(output);
            output.writeFieldEnd();
        }
        if (this.usersToApproveFromWaitingRoom != null) {
            output.writeFieldBegin("usersToApproveFromWaitingRoom", thrift.Thrift.Type.SET, 16);
            output.writeSetBegin(thrift.Thrift.Type.STRING, this.usersToApproveFromWaitingRoom.size);
            this.usersToApproveFromWaitingRoom.forEach((value_5: string): void => {
                output.writeString(value_5);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        if (this.e2eeEnforcement != null) {
            output.writeFieldBegin("e2eeEnforcement", thrift.Thrift.Type.STRUCT, 17);
            this.e2eeEnforcement.write(output);
            output.writeFieldEnd();
        }
        if (this.sfuAllocation != null) {
            output.writeFieldBegin("sfuAllocation", thrift.Thrift.Type.STRUCT, 18);
            this.sfuAllocation.write(output);
            output.writeFieldEnd();
        }
        if (this.clientMediaMode != null) {
            output.writeFieldBegin("clientMediaMode", thrift.Thrift.Type.I32, 19);
            output.writeI32(this.clientMediaMode);
            output.writeFieldEnd();
        }
        if (this.endpointSettings != null) {
            output.writeFieldBegin("endpointSettings", thrift.Thrift.Type.STRUCT, 20);
            this.endpointSettings.write(output);
            output.writeFieldEnd();
        }
        if (this.backupSfuAllocation != null) {
            output.writeFieldBegin("backupSfuAllocation", thrift.Thrift.Type.STRUCT, 21);
            this.backupSfuAllocation.write(output);
            output.writeFieldEnd();
        }
        if (this.supportedCustomVideoContentTypes != null) {
            output.writeFieldBegin("supportedCustomVideoContentTypes", thrift.Thrift.Type.SET, 22);
            output.writeSetBegin(thrift.Thrift.Type.I32, this.supportedCustomVideoContentTypes.size);
            this.supportedCustomVideoContentTypes.forEach((value_6: number): void => {
                output.writeI32(value_6);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        if (this.configIntegrityOpaqueToken != null) {
            output.writeFieldBegin("configIntegrityOpaqueToken", thrift.Thrift.Type.I32, 23);
            output.writeI32(this.configIntegrityOpaqueToken);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): JoinRequest {
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
                        const value_7: SessionDescription.SessionDescription = SessionDescription.SessionDescription.read(input);
                        _args.offer = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.SET) {
                        const value_8: Set<number> = new Set<number>();
                        const metadata_1: thrift.TSet = input.readSetBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_9: number = input.readI32();
                            value_8.add(value_9);
                        }
                        input.readSetEnd();
                        _args.deviceCapabilities = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.SET) {
                        const value_10: Set<string> = new Set<string>();
                        const metadata_2: thrift.TSet = input.readSetBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_11: string = input.readString();
                            value_10.add(value_11);
                        }
                        input.readSetEnd();
                        _args.usersToCall = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_12: Map<string, boolean> = new Map<string, boolean>();
                        const metadata_3: thrift.TMap = input.readMapBegin();
                        const size_3: number = metadata_3.size;
                        for (let i_3: number = 0; i_3 < size_3; i_3++) {
                            const key_2: string = input.readString();
                            const value_13: boolean = input.readBool();
                            value_12.set(key_2, value_13);
                        }
                        input.readMapEnd();
                        _args.mediaStatus = value_12;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_14: string = input.readString();
                        _args.userCapabilities = value_14;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_15: string = input.readString();
                        _args.supportedExperiments = value_15;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_16: Array<DataMessage.DataMessage> = new Array<DataMessage.DataMessage>();
                        const metadata_4: thrift.TList = input.readListBegin();
                        const size_4: number = metadata_4.size;
                        for (let i_4: number = 0; i_4 < size_4; i_4++) {
                            const value_17: DataMessage.DataMessage = DataMessage.DataMessage.read(input);
                            value_16.push(value_17);
                        }
                        input.readListEnd();
                        _args.appMessages = value_16;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 10:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_18: string = input.readString();
                        _args.userToEscalate = value_18;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 11:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_19: Int64 = input.readI64();
                        _args.escalatingCallId = value_19;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 12:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_20: number = input.readI32();
                        _args.conferenceType = value_20;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 13:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_21: ClientMediaStatus.ClientMediaStatus = ClientMediaStatus.ClientMediaStatus.read(input);
                        _args.mediaStatusEx = value_21;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 14:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_22: SessionDescription.SessionDescription = SessionDescription.SessionDescription.read(input);
                        _args.answer = value_22;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 15:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_23: SyncPayload.SyncPayload = SyncPayload.SyncPayload.read(input);
                        _args.syncPayload = value_23;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 16:
                    if (fieldType === thrift.Thrift.Type.SET) {
                        const value_24: Set<string> = new Set<string>();
                        const metadata_5: thrift.TSet = input.readSetBegin();
                        const size_5: number = metadata_5.size;
                        for (let i_5: number = 0; i_5 < size_5; i_5++) {
                            const value_25: string = input.readString();
                            value_24.add(value_25);
                        }
                        input.readSetEnd();
                        _args.usersToApproveFromWaitingRoom = value_24;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 17:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_26: E2eeEnforcement.E2eeEnforcement = E2eeEnforcement.E2eeEnforcement.read(input);
                        _args.e2eeEnforcement = value_26;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 18:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_27: SfuAllocation.SfuAllocation = SfuAllocation.SfuAllocation.read(input);
                        _args.sfuAllocation = value_27;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 19:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_28: number = input.readI32();
                        _args.clientMediaMode = value_28;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 20:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_29: EndpointSettings.EndpointSettings = EndpointSettings.EndpointSettings.read(input);
                        _args.endpointSettings = value_29;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 21:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_30: SfuAllocation.SfuAllocation = SfuAllocation.SfuAllocation.read(input);
                        _args.backupSfuAllocation = value_30;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 22:
                    if (fieldType === thrift.Thrift.Type.SET) {
                        const value_31: Set<number> = new Set<number>();
                        const metadata_6: thrift.TSet = input.readSetBegin();
                        const size_6: number = metadata_6.size;
                        for (let i_6: number = 0; i_6 < size_6; i_6++) {
                            const value_32: number = input.readI32();
                            value_31.add(value_32);
                        }
                        input.readSetEnd();
                        _args.supportedCustomVideoContentTypes = value_31;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 23:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_33: number = input.readI32();
                        _args.configIntegrityOpaqueToken = value_33;
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
        return new JoinRequest(_args);
    }
}