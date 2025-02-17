/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IServerCaptionsParticipantInputStateArgs {
    enabled?: boolean;
}
export class ServerCaptionsParticipantInputState {
    public enabled?: boolean;
    constructor(args?: IServerCaptionsParticipantInputStateArgs) {
        if (args != null && args.enabled != null) {
            this.enabled = args.enabled;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ServerCaptionsParticipantInputState");
        if (this.enabled != null) {
            output.writeFieldBegin("enabled", thrift.Thrift.Type.BOOL, 1);
            output.writeBool(this.enabled);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ServerCaptionsParticipantInputState {
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
                        _args.enabled = value_1;
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
        return new ServerCaptionsParticipantInputState(_args);
    }
}
