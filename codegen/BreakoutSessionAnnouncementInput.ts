/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IBreakoutSessionAnnouncementInputArgs {
    content?: string;
}
export class BreakoutSessionAnnouncementInput {
    public content?: string;
    constructor(args?: IBreakoutSessionAnnouncementInputArgs) {
        if (args != null && args.content != null) {
            this.content = args.content;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("BreakoutSessionAnnouncementInput");
        if (this.content != null) {
            output.writeFieldBegin("content", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.content);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): BreakoutSessionAnnouncementInput {
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
                        _args.content = value_1;
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
        return new BreakoutSessionAnnouncementInput(_args);
    }
}