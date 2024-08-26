/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as E2EERaisedHandsQueueStateCloneRequestParams from "./E2EERaisedHandsQueueStateCloneRequestParams";
export interface IE2EERaisedHandsQueueParticipantPayloadArgs {
    request_type?: number;
    request_id?: string;
    state_clone_request_params?: E2EERaisedHandsQueueStateCloneRequestParams.E2EERaisedHandsQueueStateCloneRequestParams;
}
export class E2EERaisedHandsQueueParticipantPayload {
    public request_type?: number;
    public request_id?: string;
    public state_clone_request_params?: E2EERaisedHandsQueueStateCloneRequestParams.E2EERaisedHandsQueueStateCloneRequestParams;
    constructor(args?: IE2EERaisedHandsQueueParticipantPayloadArgs) {
        if (args != null && args.request_type != null) {
            this.request_type = args.request_type;
        }
        if (args != null && args.request_id != null) {
            this.request_id = args.request_id;
        }
        if (args != null && args.state_clone_request_params != null) {
            this.state_clone_request_params = args.state_clone_request_params;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("E2EERaisedHandsQueueParticipantPayload");
        if (this.request_type != null) {
            output.writeFieldBegin("request_type", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.request_type);
            output.writeFieldEnd();
        }
        if (this.request_id != null) {
            output.writeFieldBegin("request_id", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.request_id);
            output.writeFieldEnd();
        }
        if (this.state_clone_request_params != null) {
            output.writeFieldBegin("state_clone_request_params", thrift.Thrift.Type.STRUCT, 3);
            this.state_clone_request_params.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): E2EERaisedHandsQueueParticipantPayload {
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
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_1: number = input.readI32();
                        _args.request_type = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_2: string = input.readString();
                        _args.request_id = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_3: E2EERaisedHandsQueueStateCloneRequestParams.E2EERaisedHandsQueueStateCloneRequestParams = E2EERaisedHandsQueueStateCloneRequestParams.E2EERaisedHandsQueueStateCloneRequestParams.read(input);
                        _args.state_clone_request_params = value_3;
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
        return new E2EERaisedHandsQueueParticipantPayload(_args);
    }
}