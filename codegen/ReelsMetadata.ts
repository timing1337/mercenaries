/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IReelsMetadataArgs {
    reels_media_source?: string;
    user_name?: string;
    avatar_url?: string;
    music_title?: string;
    effects_title?: string;
    like_count?: string;
    comment_count?: string;
    share_count?: string;
    is_viewer_liked?: boolean;
}
export class ReelsMetadata {
    public reels_media_source?: string;
    public user_name?: string;
    public avatar_url?: string;
    public music_title?: string;
    public effects_title?: string;
    public like_count?: string;
    public comment_count?: string;
    public share_count?: string;
    public is_viewer_liked?: boolean;
    constructor(args?: IReelsMetadataArgs) {
        if (args != null && args.reels_media_source != null) {
            this.reels_media_source = args.reels_media_source;
        }
        if (args != null && args.user_name != null) {
            this.user_name = args.user_name;
        }
        if (args != null && args.avatar_url != null) {
            this.avatar_url = args.avatar_url;
        }
        if (args != null && args.music_title != null) {
            this.music_title = args.music_title;
        }
        if (args != null && args.effects_title != null) {
            this.effects_title = args.effects_title;
        }
        if (args != null && args.like_count != null) {
            this.like_count = args.like_count;
        }
        if (args != null && args.comment_count != null) {
            this.comment_count = args.comment_count;
        }
        if (args != null && args.share_count != null) {
            this.share_count = args.share_count;
        }
        if (args != null && args.is_viewer_liked != null) {
            this.is_viewer_liked = args.is_viewer_liked;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ReelsMetadata");
        if (this.reels_media_source != null) {
            output.writeFieldBegin("reels_media_source", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.reels_media_source);
            output.writeFieldEnd();
        }
        if (this.user_name != null) {
            output.writeFieldBegin("user_name", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.user_name);
            output.writeFieldEnd();
        }
        if (this.avatar_url != null) {
            output.writeFieldBegin("avatar_url", thrift.Thrift.Type.STRING, 3);
            output.writeString(this.avatar_url);
            output.writeFieldEnd();
        }
        if (this.music_title != null) {
            output.writeFieldBegin("music_title", thrift.Thrift.Type.STRING, 4);
            output.writeString(this.music_title);
            output.writeFieldEnd();
        }
        if (this.effects_title != null) {
            output.writeFieldBegin("effects_title", thrift.Thrift.Type.STRING, 5);
            output.writeString(this.effects_title);
            output.writeFieldEnd();
        }
        if (this.like_count != null) {
            output.writeFieldBegin("like_count", thrift.Thrift.Type.STRING, 6);
            output.writeString(this.like_count);
            output.writeFieldEnd();
        }
        if (this.comment_count != null) {
            output.writeFieldBegin("comment_count", thrift.Thrift.Type.STRING, 7);
            output.writeString(this.comment_count);
            output.writeFieldEnd();
        }
        if (this.share_count != null) {
            output.writeFieldBegin("share_count", thrift.Thrift.Type.STRING, 8);
            output.writeString(this.share_count);
            output.writeFieldEnd();
        }
        if (this.is_viewer_liked != null) {
            output.writeFieldBegin("is_viewer_liked", thrift.Thrift.Type.BOOL, 9);
            output.writeBool(this.is_viewer_liked);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ReelsMetadata {
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
                        _args.reels_media_source = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_2: string = input.readString();
                        _args.user_name = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_3: string = input.readString();
                        _args.avatar_url = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_4: string = input.readString();
                        _args.music_title = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_5: string = input.readString();
                        _args.effects_title = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_6: string = input.readString();
                        _args.like_count = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_7: string = input.readString();
                        _args.comment_count = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_8: string = input.readString();
                        _args.share_count = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_9: boolean = input.readBool();
                        _args.is_viewer_liked = value_9;
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
        return new ReelsMetadata(_args);
    }
}