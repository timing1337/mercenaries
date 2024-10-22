/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as Context from "./Context";
export interface IIntenticonItemArgs {
    user_id?: string;
    sticker_url?: string;
    animated_sticker_url?: string;
    sticker_mime_type?: string;
    animated_sticker_mime_type?: string;
    text?: string;
    intenticon_id?: string;
    context?: Context.Context;
    operation?: number;
}
export class IntenticonItem {
    public user_id?: string;
    public sticker_url?: string;
    public animated_sticker_url?: string;
    public sticker_mime_type?: string;
    public animated_sticker_mime_type?: string;
    public text?: string;
    public intenticon_id?: string;
    public context?: Context.Context;
    public operation?: number;
    constructor(args?: IIntenticonItemArgs) {
        if (args != null && args.user_id != null) {
            this.user_id = args.user_id;
        }
        if (args != null && args.sticker_url != null) {
            this.sticker_url = args.sticker_url;
        }
        if (args != null && args.animated_sticker_url != null) {
            this.animated_sticker_url = args.animated_sticker_url;
        }
        if (args != null && args.sticker_mime_type != null) {
            this.sticker_mime_type = args.sticker_mime_type;
        }
        if (args != null && args.animated_sticker_mime_type != null) {
            this.animated_sticker_mime_type = args.animated_sticker_mime_type;
        }
        if (args != null && args.text != null) {
            this.text = args.text;
        }
        if (args != null && args.intenticon_id != null) {
            this.intenticon_id = args.intenticon_id;
        }
        if (args != null && args.context != null) {
            this.context = args.context;
        }
        if (args != null && args.operation != null) {
            this.operation = args.operation;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("IntenticonItem");
        if (this.user_id != null) {
            output.writeFieldBegin("user_id", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.user_id);
            output.writeFieldEnd();
        }
        if (this.sticker_url != null) {
            output.writeFieldBegin("sticker_url", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.sticker_url);
            output.writeFieldEnd();
        }
        if (this.animated_sticker_url != null) {
            output.writeFieldBegin("animated_sticker_url", thrift.Thrift.Type.STRING, 3);
            output.writeString(this.animated_sticker_url);
            output.writeFieldEnd();
        }
        if (this.sticker_mime_type != null) {
            output.writeFieldBegin("sticker_mime_type", thrift.Thrift.Type.STRING, 4);
            output.writeString(this.sticker_mime_type);
            output.writeFieldEnd();
        }
        if (this.animated_sticker_mime_type != null) {
            output.writeFieldBegin("animated_sticker_mime_type", thrift.Thrift.Type.STRING, 5);
            output.writeString(this.animated_sticker_mime_type);
            output.writeFieldEnd();
        }
        if (this.text != null) {
            output.writeFieldBegin("text", thrift.Thrift.Type.STRING, 6);
            output.writeString(this.text);
            output.writeFieldEnd();
        }
        if (this.intenticon_id != null) {
            output.writeFieldBegin("intenticon_id", thrift.Thrift.Type.STRING, 7);
            output.writeString(this.intenticon_id);
            output.writeFieldEnd();
        }
        if (this.context != null) {
            output.writeFieldBegin("context", thrift.Thrift.Type.STRUCT, 8);
            this.context.write(output);
            output.writeFieldEnd();
        }
        if (this.operation != null) {
            output.writeFieldBegin("operation", thrift.Thrift.Type.I32, 9);
            output.writeI32(this.operation);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): IntenticonItem {
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
                        _args.user_id = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_2: string = input.readString();
                        _args.sticker_url = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_3: string = input.readString();
                        _args.animated_sticker_url = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_4: string = input.readString();
                        _args.sticker_mime_type = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_5: string = input.readString();
                        _args.animated_sticker_mime_type = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_6: string = input.readString();
                        _args.text = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_7: string = input.readString();
                        _args.intenticon_id = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_8: Context.Context = Context.Context.read(input);
                        _args.context = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_9: number = input.readI32();
                        _args.operation = value_9;
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
        return new IntenticonItem(_args);
    }
}
