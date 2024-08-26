/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as Placeholder from "./Placeholder";
import * as Fallback from "./Fallback";
import * as InstagramContent from "./InstagramContent";
import * as FacebookVideo from "./FacebookVideo";
export interface IContentArgs {
    placeholder?: Placeholder.Placeholder;
    fallback?: Fallback.Fallback;
    ig_content?: InstagramContent.InstagramContent;
    fb_video?: FacebookVideo.FacebookVideo;
}
export class Content {
    public placeholder?: Placeholder.Placeholder;
    public fallback?: Fallback.Fallback;
    public ig_content?: InstagramContent.InstagramContent;
    public fb_video?: FacebookVideo.FacebookVideo;
    constructor(args?: IContentArgs) {
        if (args != null && args.placeholder != null) {
            this.placeholder = args.placeholder;
        }
        if (args != null && args.fallback != null) {
            this.fallback = args.fallback;
        }
        if (args != null && args.ig_content != null) {
            this.ig_content = args.ig_content;
        }
        if (args != null && args.fb_video != null) {
            this.fb_video = args.fb_video;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("Content");
        if (this.placeholder != null) {
            output.writeFieldBegin("placeholder", thrift.Thrift.Type.STRUCT, 1);
            this.placeholder.write(output);
            output.writeFieldEnd();
        }
        if (this.fallback != null) {
            output.writeFieldBegin("fallback", thrift.Thrift.Type.STRUCT, 2);
            this.fallback.write(output);
            output.writeFieldEnd();
        }
        if (this.ig_content != null) {
            output.writeFieldBegin("ig_content", thrift.Thrift.Type.STRUCT, 3);
            this.ig_content.write(output);
            output.writeFieldEnd();
        }
        if (this.fb_video != null) {
            output.writeFieldBegin("fb_video", thrift.Thrift.Type.STRUCT, 4);
            this.fb_video.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): Content {
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
                        const value_1: Placeholder.Placeholder = Placeholder.Placeholder.read(input);
                        _args.placeholder = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_2: Fallback.Fallback = Fallback.Fallback.read(input);
                        _args.fallback = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_3: InstagramContent.InstagramContent = InstagramContent.InstagramContent.read(input);
                        _args.ig_content = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_4: FacebookVideo.FacebookVideo = FacebookVideo.FacebookVideo.read(input);
                        _args.fb_video = value_4;
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
        return new Content(_args);
    }
}