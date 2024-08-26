/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface ISctpSessionDescriptionArgs {
    sdpString?: string;
}
export class SctpSessionDescription {
    public sdpString?: string;
    constructor(args?: ISctpSessionDescriptionArgs) {
        if (args != null && args.sdpString != null) {
            this.sdpString = args.sdpString;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("SctpSessionDescription");
        if (this.sdpString != null) {
            output.writeFieldBegin("sdpString", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.sdpString);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): SctpSessionDescription {
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
                        _args.sdpString = value_1;
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
        return new SctpSessionDescription(_args);
    }
}