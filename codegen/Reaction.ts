/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
import * as Emoji from "./Emoji";
export interface IReactionArgs {
    selected_reaction?: Emoji.Emoji;
    reaction_expiry_time?: number | Int64;
}
export class Reaction {
    public selected_reaction?: Emoji.Emoji;
    public reaction_expiry_time?: Int64;
    constructor(args?: IReactionArgs) {
        if (args != null && args.selected_reaction != null) {
            this.selected_reaction = args.selected_reaction;
        }
        if (args != null && args.reaction_expiry_time != null) {
            if (typeof args.reaction_expiry_time === "number") {
                this.reaction_expiry_time = new Int64(args.reaction_expiry_time);
            }
            else {
                this.reaction_expiry_time = args.reaction_expiry_time;
            }
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("Reaction");
        if (this.selected_reaction != null) {
            output.writeFieldBegin("selected_reaction", thrift.Thrift.Type.STRUCT, 1);
            this.selected_reaction.write(output);
            output.writeFieldEnd();
        }
        if (this.reaction_expiry_time != null) {
            output.writeFieldBegin("reaction_expiry_time", thrift.Thrift.Type.I64, 2);
            output.writeI64(this.reaction_expiry_time);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): Reaction {
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
                        const value_1: Emoji.Emoji = Emoji.Emoji.read(input);
                        _args.selected_reaction = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_2: Int64 = input.readI64();
                        _args.reaction_expiry_time = value_2;
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
        return new Reaction(_args);
    }
}