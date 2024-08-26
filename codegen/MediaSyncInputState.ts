/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as ActionMetadata from "./ActionMetadata";
export interface IMediaSyncInputStateArgs {
    action?: number;
    action_metadata?: ActionMetadata.ActionMetadata;
    content_id?: string;
    content_source?: number;
    admin_message_type?: number;
    skip_autoplay_candidate_generation?: boolean;
    seed_content_id?: string;
    initiator_id?: string;
}
export class MediaSyncInputState {
    public action?: number;
    public action_metadata?: ActionMetadata.ActionMetadata;
    public content_id?: string;
    public content_source?: number;
    public admin_message_type?: number;
    public skip_autoplay_candidate_generation?: boolean;
    public seed_content_id?: string;
    public initiator_id?: string;
    constructor(args?: IMediaSyncInputStateArgs) {
        if (args != null && args.action != null) {
            this.action = args.action;
        }
        if (args != null && args.action_metadata != null) {
            this.action_metadata = args.action_metadata;
        }
        if (args != null && args.content_id != null) {
            this.content_id = args.content_id;
        }
        if (args != null && args.content_source != null) {
            this.content_source = args.content_source;
        }
        if (args != null && args.admin_message_type != null) {
            this.admin_message_type = args.admin_message_type;
        }
        if (args != null && args.skip_autoplay_candidate_generation != null) {
            this.skip_autoplay_candidate_generation = args.skip_autoplay_candidate_generation;
        }
        if (args != null && args.seed_content_id != null) {
            this.seed_content_id = args.seed_content_id;
        }
        if (args != null && args.initiator_id != null) {
            this.initiator_id = args.initiator_id;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("MediaSyncInputState");
        if (this.action != null) {
            output.writeFieldBegin("action", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.action);
            output.writeFieldEnd();
        }
        if (this.action_metadata != null) {
            output.writeFieldBegin("action_metadata", thrift.Thrift.Type.STRUCT, 2);
            this.action_metadata.write(output);
            output.writeFieldEnd();
        }
        if (this.content_id != null) {
            output.writeFieldBegin("content_id", thrift.Thrift.Type.STRING, 3);
            output.writeString(this.content_id);
            output.writeFieldEnd();
        }
        if (this.content_source != null) {
            output.writeFieldBegin("content_source", thrift.Thrift.Type.I32, 4);
            output.writeI32(this.content_source);
            output.writeFieldEnd();
        }
        if (this.admin_message_type != null) {
            output.writeFieldBegin("admin_message_type", thrift.Thrift.Type.I32, 5);
            output.writeI32(this.admin_message_type);
            output.writeFieldEnd();
        }
        if (this.skip_autoplay_candidate_generation != null) {
            output.writeFieldBegin("skip_autoplay_candidate_generation", thrift.Thrift.Type.BOOL, 6);
            output.writeBool(this.skip_autoplay_candidate_generation);
            output.writeFieldEnd();
        }
        if (this.seed_content_id != null) {
            output.writeFieldBegin("seed_content_id", thrift.Thrift.Type.STRING, 7);
            output.writeString(this.seed_content_id);
            output.writeFieldEnd();
        }
        if (this.initiator_id != null) {
            output.writeFieldBegin("initiator_id", thrift.Thrift.Type.STRING, 8);
            output.writeString(this.initiator_id);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): MediaSyncInputState {
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
                        const value_2: ActionMetadata.ActionMetadata = ActionMetadata.ActionMetadata.read(input);
                        _args.action_metadata = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_3: string = input.readString();
                        _args.content_id = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_4: number = input.readI32();
                        _args.content_source = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_5: number = input.readI32();
                        _args.admin_message_type = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_6: boolean = input.readBool();
                        _args.skip_autoplay_candidate_generation = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_7: string = input.readString();
                        _args.seed_content_id = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_8: string = input.readString();
                        _args.initiator_id = value_8;
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
        return new MediaSyncInputState(_args);
    }
}