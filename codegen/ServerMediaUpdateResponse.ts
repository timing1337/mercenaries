/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
import * as SessionDescription from "./SessionDescription";
import * as ClientMediaStatus from "./ClientMediaStatus";
export interface IServerMediaUpdateResponseArgs {
    currentVersion?: number | Int64;
    answer?: SessionDescription.SessionDescription;
    mediaStatus?: ClientMediaStatus.ClientMediaStatus;
}
export class ServerMediaUpdateResponse {
    public currentVersion?: Int64;
    public answer?: SessionDescription.SessionDescription;
    public mediaStatus?: ClientMediaStatus.ClientMediaStatus;
    constructor(args?: IServerMediaUpdateResponseArgs) {
        if (args != null && args.currentVersion != null) {
            if (typeof args.currentVersion === "number") {
                this.currentVersion = new Int64(args.currentVersion);
            }
            else {
                this.currentVersion = args.currentVersion;
            }
        }
        if (args != null && args.answer != null) {
            this.answer = args.answer;
        }
        if (args != null && args.mediaStatus != null) {
            this.mediaStatus = args.mediaStatus;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ServerMediaUpdateResponse");
        if (this.currentVersion != null) {
            output.writeFieldBegin("currentVersion", thrift.Thrift.Type.I64, 1);
            output.writeI64(this.currentVersion);
            output.writeFieldEnd();
        }
        if (this.answer != null) {
            output.writeFieldBegin("answer", thrift.Thrift.Type.STRUCT, 2);
            this.answer.write(output);
            output.writeFieldEnd();
        }
        if (this.mediaStatus != null) {
            output.writeFieldBegin("mediaStatus", thrift.Thrift.Type.STRUCT, 3);
            this.mediaStatus.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ServerMediaUpdateResponse {
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
                        _args.currentVersion = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_2: SessionDescription.SessionDescription = SessionDescription.SessionDescription.read(input);
                        _args.answer = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_3: ClientMediaStatus.ClientMediaStatus = ClientMediaStatus.ClientMediaStatus.read(input);
                        _args.mediaStatus = value_3;
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
        return new ServerMediaUpdateResponse(_args);
    }
}