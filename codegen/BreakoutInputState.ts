/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as BreakoutStartInput from "./BreakoutStartInput";
import * as BreakoutSessionAnnouncementInput from "./BreakoutSessionAnnouncementInput";
export interface IBreakoutInputStateArgs {
    action?: number;
    breakoutStartInput?: BreakoutStartInput.BreakoutStartInput;
    announcementInput?: BreakoutSessionAnnouncementInput.BreakoutSessionAnnouncementInput;
    actionID?: number;
}
export class BreakoutInputState {
    public action?: number;
    public breakoutStartInput?: BreakoutStartInput.BreakoutStartInput;
    public announcementInput?: BreakoutSessionAnnouncementInput.BreakoutSessionAnnouncementInput;
    public actionID?: number;
    constructor(args?: IBreakoutInputStateArgs) {
        if (args != null && args.action != null) {
            this.action = args.action;
        }
        if (args != null && args.breakoutStartInput != null) {
            this.breakoutStartInput = args.breakoutStartInput;
        }
        if (args != null && args.announcementInput != null) {
            this.announcementInput = args.announcementInput;
        }
        if (args != null && args.actionID != null) {
            this.actionID = args.actionID;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("BreakoutInputState");
        if (this.action != null) {
            output.writeFieldBegin("action", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.action);
            output.writeFieldEnd();
        }
        if (this.breakoutStartInput != null) {
            output.writeFieldBegin("breakoutStartInput", thrift.Thrift.Type.STRUCT, 2);
            this.breakoutStartInput.write(output);
            output.writeFieldEnd();
        }
        if (this.announcementInput != null) {
            output.writeFieldBegin("announcementInput", thrift.Thrift.Type.STRUCT, 3);
            this.announcementInput.write(output);
            output.writeFieldEnd();
        }
        if (this.actionID != null) {
            output.writeFieldBegin("actionID", thrift.Thrift.Type.I32, 4);
            output.writeI32(this.actionID);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): BreakoutInputState {
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
                        _args.action = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_2: BreakoutStartInput.BreakoutStartInput = BreakoutStartInput.BreakoutStartInput.read(input);
                        _args.breakoutStartInput = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_3: BreakoutSessionAnnouncementInput.BreakoutSessionAnnouncementInput = BreakoutSessionAnnouncementInput.BreakoutSessionAnnouncementInput.read(input);
                        _args.announcementInput = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_4: number = input.readI32();
                        _args.actionID = value_4;
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
        return new BreakoutInputState(_args);
    }
}