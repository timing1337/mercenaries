/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
export interface IClientEventArgs {
    type?: number;
    time?: number | Int64;
}
export class ClientEvent {
    public type?: number;
    public time?: Int64;
    constructor(args?: IClientEventArgs) {
        if (args != null && args.type != null) {
            this.type = args.type;
        }
        if (args != null && args.time != null) {
            if (typeof args.time === "number") {
                this.time = new Int64(args.time);
            }
            else {
                this.time = args.time;
            }
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ClientEvent");
        if (this.type != null) {
            output.writeFieldBegin("type", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.type);
            output.writeFieldEnd();
        }
        if (this.time != null) {
            output.writeFieldBegin("time", thrift.Thrift.Type.I64, 2);
            output.writeI64(this.time);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ClientEvent {
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
                        _args.type = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_2: Int64 = input.readI64();
                        _args.time = value_2;
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
        return new ClientEvent(_args);
    }
}