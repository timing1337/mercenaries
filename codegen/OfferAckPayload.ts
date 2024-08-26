/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
export interface IOfferAckPayloadArgs {
    ackMessageId?: number | Int64;
    uploadLogLevel?: number;
    selectedFbExperiments?: string;
}
export class OfferAckPayload {
    public ackMessageId?: Int64;
    public uploadLogLevel?: number;
    public selectedFbExperiments?: string;
    constructor(args?: IOfferAckPayloadArgs) {
        if (args != null && args.ackMessageId != null) {
            if (typeof args.ackMessageId === "number") {
                this.ackMessageId = new Int64(args.ackMessageId);
            }
            else {
                this.ackMessageId = args.ackMessageId;
            }
        }
        if (args != null && args.uploadLogLevel != null) {
            this.uploadLogLevel = args.uploadLogLevel;
        }
        if (args != null && args.selectedFbExperiments != null) {
            this.selectedFbExperiments = args.selectedFbExperiments;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("OfferAckPayload");
        if (this.ackMessageId != null) {
            output.writeFieldBegin("ackMessageId", thrift.Thrift.Type.I64, 1);
            output.writeI64(this.ackMessageId);
            output.writeFieldEnd();
        }
        if (this.uploadLogLevel != null) {
            output.writeFieldBegin("uploadLogLevel", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.uploadLogLevel);
            output.writeFieldEnd();
        }
        if (this.selectedFbExperiments != null) {
            output.writeFieldBegin("selectedFbExperiments", thrift.Thrift.Type.STRING, 3);
            output.writeString(this.selectedFbExperiments);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): OfferAckPayload {
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
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_1: Int64 = input.readI64();
                        _args.ackMessageId = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_2: number = input.readI32();
                        _args.uploadLogLevel = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_3: string = input.readString();
                        _args.selectedFbExperiments = value_3;
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
        return new OfferAckPayload(_args);
    }
}