/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
export interface IServerInfoArgs {
    cluster?: string;
    conferenceName_deprecated?: string;
    nonce?: string;
    conferenceId?: number | Int64;
}
export class ServerInfo {
    public cluster?: string;
    public conferenceName_deprecated?: string;
    public nonce?: string;
    public conferenceId?: Int64;
    constructor(args?: IServerInfoArgs) {
        if (args != null && args.cluster != null) {
            this.cluster = args.cluster;
        }
        if (args != null && args.conferenceName_deprecated != null) {
            this.conferenceName_deprecated = args.conferenceName_deprecated;
        }
        if (args != null && args.nonce != null) {
            this.nonce = args.nonce;
        }
        if (args != null && args.conferenceId != null) {
            if (typeof args.conferenceId === "number") {
                this.conferenceId = new Int64(args.conferenceId);
            }
            else {
                this.conferenceId = args.conferenceId;
            }
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ServerInfo");
        if (this.cluster != null) {
            output.writeFieldBegin("cluster", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.cluster);
            output.writeFieldEnd();
        }
        if (this.conferenceName_deprecated != null) {
            output.writeFieldBegin("conferenceName_deprecated", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.conferenceName_deprecated);
            output.writeFieldEnd();
        }
        if (this.nonce != null) {
            output.writeFieldBegin("nonce", thrift.Thrift.Type.STRING, 3);
            output.writeString(this.nonce);
            output.writeFieldEnd();
        }
        if (this.conferenceId != null) {
            output.writeFieldBegin("conferenceId", thrift.Thrift.Type.I64, 4);
            output.writeI64(this.conferenceId);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ServerInfo {
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
                        _args.cluster = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_2: string = input.readString();
                        _args.conferenceName_deprecated = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_3: string = input.readString();
                        _args.nonce = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_4: Int64 = input.readI64();
                        _args.conferenceId = value_4;
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
        return new ServerInfo(_args);
    }
}