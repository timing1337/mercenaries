/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface ISizedUrlArgs {
    url?: string;
    height?: number;
    width?: number;
    type?: string;
}
export class SizedUrl {
    public url?: string;
    public height?: number;
    public width?: number;
    public type?: string;
    constructor(args?: ISizedUrlArgs) {
        if (args != null && args.url != null) {
            this.url = args.url;
        }
        if (args != null && args.height != null) {
            this.height = args.height;
        }
        if (args != null && args.width != null) {
            this.width = args.width;
        }
        if (args != null && args.type != null) {
            this.type = args.type;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("SizedUrl");
        if (this.url != null) {
            output.writeFieldBegin("url", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.url);
            output.writeFieldEnd();
        }
        if (this.height != null) {
            output.writeFieldBegin("height", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.height);
            output.writeFieldEnd();
        }
        if (this.width != null) {
            output.writeFieldBegin("width", thrift.Thrift.Type.I32, 3);
            output.writeI32(this.width);
            output.writeFieldEnd();
        }
        if (this.type != null) {
            output.writeFieldBegin("type", thrift.Thrift.Type.STRING, 4);
            output.writeString(this.type);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): SizedUrl {
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
                        _args.url = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_2: number = input.readI32();
                        _args.height = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_3: number = input.readI32();
                        _args.width = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_4: string = input.readString();
                        _args.type = value_4;
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
        return new SizedUrl(_args);
    }
}
