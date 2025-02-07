/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IIdentityKeyInfoArgs {
    mode?: number;
}
export class IdentityKeyInfo {
    public mode?: number;
    constructor(args?: IIdentityKeyInfoArgs) {
        if (args != null && args.mode != null) {
            this.mode = args.mode;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("IdentityKeyInfo");
        if (this.mode != null) {
            output.writeFieldBegin("mode", thrift.Thrift.Type.I16, 1);
            output.writeI16(this.mode);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): IdentityKeyInfo {
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
                    if (fieldType === thrift.Thrift.Type.I16) {
                        const value_1: number = input.readI16();
                        _args.mode = value_1;
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
        return new IdentityKeyInfo(_args);
    }
}
