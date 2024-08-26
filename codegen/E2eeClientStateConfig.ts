/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IE2eeClientStateConfigArgs {
    keyNegotiationMode?: number;
    allowOptionalGfd?: boolean;
}
export class E2eeClientStateConfig {
    public keyNegotiationMode?: number;
    public allowOptionalGfd?: boolean;
    constructor(args?: IE2eeClientStateConfigArgs) {
        if (args != null && args.keyNegotiationMode != null) {
            this.keyNegotiationMode = args.keyNegotiationMode;
        }
        if (args != null && args.allowOptionalGfd != null) {
            this.allowOptionalGfd = args.allowOptionalGfd;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("E2eeClientStateConfig");
        if (this.keyNegotiationMode != null) {
            output.writeFieldBegin("keyNegotiationMode", thrift.Thrift.Type.I16, 1);
            output.writeI16(this.keyNegotiationMode);
            output.writeFieldEnd();
        }
        if (this.allowOptionalGfd != null) {
            output.writeFieldBegin("allowOptionalGfd", thrift.Thrift.Type.BOOL, 3);
            output.writeBool(this.allowOptionalGfd);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): E2eeClientStateConfig {
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
                        _args.keyNegotiationMode = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_2: boolean = input.readBool();
                        _args.allowOptionalGfd = value_2;
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
        return new E2eeClientStateConfig(_args);
    }
}