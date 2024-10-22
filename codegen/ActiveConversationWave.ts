/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
export interface IActiveConversationWaveArgs {
    sender?: string;
    recipient?: string;
    sender_message?: number;
    responder_message?: number;
    status?: number;
    expiration_timestamp_seconds?: number | Int64;
}
export class ActiveConversationWave {
    public sender?: string;
    public recipient?: string;
    public sender_message?: number;
    public responder_message?: number;
    public status?: number;
    public expiration_timestamp_seconds?: Int64;
    constructor(args?: IActiveConversationWaveArgs) {
        if (args != null && args.sender != null) {
            this.sender = args.sender;
        }
        if (args != null && args.recipient != null) {
            this.recipient = args.recipient;
        }
        if (args != null && args.sender_message != null) {
            this.sender_message = args.sender_message;
        }
        if (args != null && args.responder_message != null) {
            this.responder_message = args.responder_message;
        }
        if (args != null && args.status != null) {
            this.status = args.status;
        }
        if (args != null && args.expiration_timestamp_seconds != null) {
            if (typeof args.expiration_timestamp_seconds === "number") {
                this.expiration_timestamp_seconds = new Int64(args.expiration_timestamp_seconds);
            }
            else {
                this.expiration_timestamp_seconds = args.expiration_timestamp_seconds;
            }
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ActiveConversationWave");
        if (this.sender != null) {
            output.writeFieldBegin("sender", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.sender);
            output.writeFieldEnd();
        }
        if (this.recipient != null) {
            output.writeFieldBegin("recipient", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.recipient);
            output.writeFieldEnd();
        }
        if (this.sender_message != null) {
            output.writeFieldBegin("sender_message", thrift.Thrift.Type.I32, 3);
            output.writeI32(this.sender_message);
            output.writeFieldEnd();
        }
        if (this.responder_message != null) {
            output.writeFieldBegin("responder_message", thrift.Thrift.Type.I32, 4);
            output.writeI32(this.responder_message);
            output.writeFieldEnd();
        }
        if (this.status != null) {
            output.writeFieldBegin("status", thrift.Thrift.Type.I32, 5);
            output.writeI32(this.status);
            output.writeFieldEnd();
        }
        if (this.expiration_timestamp_seconds != null) {
            output.writeFieldBegin("expiration_timestamp_seconds", thrift.Thrift.Type.I64, 6);
            output.writeI64(this.expiration_timestamp_seconds);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ActiveConversationWave {
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
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_1: string = input.readString();
                        _args.sender = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_2: string = input.readString();
                        _args.recipient = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_3: number = input.readI32();
                        _args.sender_message = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_4: number = input.readI32();
                        _args.responder_message = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_5: number = input.readI32();
                        _args.status = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_6: Int64 = input.readI64();
                        _args.expiration_timestamp_seconds = value_6;
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
        return new ActiveConversationWave(_args);
    }
}
