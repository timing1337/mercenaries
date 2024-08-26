/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IHistoryRecordArgs {
    content_source?: number;
    content_id?: string;
}
export class HistoryRecord {
    public content_source?: number;
    public content_id?: string;
    constructor(args?: IHistoryRecordArgs) {
        if (args != null && args.content_source != null) {
            this.content_source = args.content_source;
        }
        if (args != null && args.content_id != null) {
            this.content_id = args.content_id;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("HistoryRecord");
        if (this.content_source != null) {
            output.writeFieldBegin("content_source", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.content_source);
            output.writeFieldEnd();
        }
        if (this.content_id != null) {
            output.writeFieldBegin("content_id", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.content_id);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): HistoryRecord {
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
                        _args.content_source = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_2: string = input.readString();
                        _args.content_id = value_2;
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
        return new HistoryRecord(_args);
    }
}