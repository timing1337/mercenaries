/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IEmojiReactionsConferenceOutputStateArgs {
    is_online_learning_call?: boolean;
    is_emoji_reactions_feature_enabled?: boolean;
    call_type?: number;
    is_rtss_enabled?: boolean;
}
export class EmojiReactionsConferenceOutputState {
    public is_online_learning_call?: boolean;
    public is_emoji_reactions_feature_enabled?: boolean;
    public call_type?: number;
    public is_rtss_enabled?: boolean;
    constructor(args?: IEmojiReactionsConferenceOutputStateArgs) {
        if (args != null && args.is_online_learning_call != null) {
            this.is_online_learning_call = args.is_online_learning_call;
        }
        if (args != null && args.is_emoji_reactions_feature_enabled != null) {
            this.is_emoji_reactions_feature_enabled = args.is_emoji_reactions_feature_enabled;
        }
        if (args != null && args.call_type != null) {
            this.call_type = args.call_type;
        }
        if (args != null && args.is_rtss_enabled != null) {
            this.is_rtss_enabled = args.is_rtss_enabled;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("EmojiReactionsConferenceOutputState");
        if (this.is_online_learning_call != null) {
            output.writeFieldBegin("is_online_learning_call", thrift.Thrift.Type.BOOL, 1);
            output.writeBool(this.is_online_learning_call);
            output.writeFieldEnd();
        }
        if (this.is_emoji_reactions_feature_enabled != null) {
            output.writeFieldBegin("is_emoji_reactions_feature_enabled", thrift.Thrift.Type.BOOL, 2);
            output.writeBool(this.is_emoji_reactions_feature_enabled);
            output.writeFieldEnd();
        }
        if (this.call_type != null) {
            output.writeFieldBegin("call_type", thrift.Thrift.Type.I32, 3);
            output.writeI32(this.call_type);
            output.writeFieldEnd();
        }
        if (this.is_rtss_enabled != null) {
            output.writeFieldBegin("is_rtss_enabled", thrift.Thrift.Type.BOOL, 4);
            output.writeBool(this.is_rtss_enabled);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): EmojiReactionsConferenceOutputState {
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
                        _args.is_online_learning_call = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_2: boolean = input.readBool();
                        _args.is_emoji_reactions_feature_enabled = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_3: number = input.readI32();
                        _args.call_type = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_4: boolean = input.readBool();
                        _args.is_rtss_enabled = value_4;
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
        return new EmojiReactionsConferenceOutputState(_args);
    }
}