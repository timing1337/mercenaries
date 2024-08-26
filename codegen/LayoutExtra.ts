/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as MediaStream from "./MediaStream";
export interface ILayoutExtraArgs {
    pinnedMediaStream?: MediaStream.MediaStream;
}
export class LayoutExtra {
    public pinnedMediaStream?: MediaStream.MediaStream;
    constructor(args?: ILayoutExtraArgs) {
        if (args != null && args.pinnedMediaStream != null) {
            this.pinnedMediaStream = args.pinnedMediaStream;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("LayoutExtra");
        if (this.pinnedMediaStream != null) {
            output.writeFieldBegin("pinnedMediaStream", thrift.Thrift.Type.STRUCT, 1);
            this.pinnedMediaStream.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): LayoutExtra {
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
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_1: MediaStream.MediaStream = MediaStream.MediaStream.read(input);
                        _args.pinnedMediaStream = value_1;
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
        return new LayoutExtra(_args);
    }
}