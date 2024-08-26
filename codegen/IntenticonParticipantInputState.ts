/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as IntenticonItem from "./IntenticonItem";
export interface IIntenticonParticipantInputStateArgs {
    intenticonItem?: IntenticonItem.IntenticonItem;
}
export class IntenticonParticipantInputState {
    public intenticonItem?: IntenticonItem.IntenticonItem;
    constructor(args?: IIntenticonParticipantInputStateArgs) {
        if (args != null && args.intenticonItem != null) {
            this.intenticonItem = args.intenticonItem;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("IntenticonParticipantInputState");
        if (this.intenticonItem != null) {
            output.writeFieldBegin("intenticonItem", thrift.Thrift.Type.STRUCT, 1);
            this.intenticonItem.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): IntenticonParticipantInputState {
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
                        const value_1: IntenticonItem.IntenticonItem = IntenticonItem.IntenticonItem.read(input);
                        _args.intenticonItem = value_1;
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
        return new IntenticonParticipantInputState(_args);
    }
}