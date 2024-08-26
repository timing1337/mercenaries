/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IPollPermissionsArgs {
    can_delete?: boolean;
}
export class PollPermissions {
    public can_delete?: boolean;
    constructor(args?: IPollPermissionsArgs) {
        if (args != null && args.can_delete != null) {
            this.can_delete = args.can_delete;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("PollPermissions");
        if (this.can_delete != null) {
            output.writeFieldBegin("can_delete", thrift.Thrift.Type.BOOL, 1);
            output.writeBool(this.can_delete);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): PollPermissions {
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
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_1: boolean = input.readBool();
                        _args.can_delete = value_1;
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
        return new PollPermissions(_args);
    }
}