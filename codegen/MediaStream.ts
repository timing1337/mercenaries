/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
export interface IMediaStreamArgs {
    userId?: number | Int64;
    mediaStreamType?: number;
}
export class MediaStream {
    public userId?: Int64;
    public mediaStreamType?: number;
    constructor(args?: IMediaStreamArgs) {
        if (args != null && args.userId != null) {
            if (typeof args.userId === "number") {
                this.userId = new Int64(args.userId);
            }
            else {
                this.userId = args.userId;
            }
        }
        if (args != null && args.mediaStreamType != null) {
            this.mediaStreamType = args.mediaStreamType;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("MediaStream");
        if (this.userId != null) {
            output.writeFieldBegin("userId", thrift.Thrift.Type.I64, 1);
            output.writeI64(this.userId);
            output.writeFieldEnd();
        }
        if (this.mediaStreamType != null) {
            output.writeFieldBegin("mediaStreamType", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.mediaStreamType);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): MediaStream {
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
                        _args.userId = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_2: number = input.readI32();
                        _args.mediaStreamType = value_2;
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
        return new MediaStream(_args);
    }
}