/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
export interface IWebrtcMessageEndpointArgs {
    deviceId?: string;
    appId?: number | Int64;
}
export class WebrtcMessageEndpoint {
    public deviceId?: string;
    public appId?: Int64;
    constructor(args?: IWebrtcMessageEndpointArgs) {
        if (args != null && args.deviceId != null) {
            this.deviceId = args.deviceId;
        }
        if (args != null && args.appId != null) {
            if (typeof args.appId === "number") {
                this.appId = new Int64(args.appId);
            }
            else {
                this.appId = args.appId;
            }
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("WebrtcMessageEndpoint");
        if (this.deviceId != null) {
            output.writeFieldBegin("deviceId", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.deviceId);
            output.writeFieldEnd();
        }
        if (this.appId != null) {
            output.writeFieldBegin("appId", thrift.Thrift.Type.I64, 2);
            output.writeI64(this.appId);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): WebrtcMessageEndpoint {
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
                        _args.deviceId = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_2: Int64 = input.readI64();
                        _args.appId = value_2;
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
        return new WebrtcMessageEndpoint(_args);
    }
}