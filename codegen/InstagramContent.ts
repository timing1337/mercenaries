/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as InstagramContentOwner from "./InstagramContentOwner";
import * as SizedUrl from "./SizedUrl";
import * as Video from "./Video";
import * as AudioAttribution from "./AudioAttribution";
import * as ShoppingProductTag from "./ShoppingProductTag";
export interface IInstagramContentArgs {
    content_id?: string;
    owner?: InstagramContentOwner.InstagramContentOwner;
    media_type?: number;
    thumbnail_url?: string;
    images?: Array<SizedUrl.SizedUrl>;
    video?: Video.Video;
    carousel?: Array<InstagramContent>;
    audio_attribution?: AudioAttribution.AudioAttribution;
    product_type?: number;
    tracking_token?: string;
    shopping_product_tags?: Array<ShoppingProductTag.ShoppingProductTag>;
}
export class InstagramContent {
    public content_id?: string;
    public owner?: InstagramContentOwner.InstagramContentOwner;
    public media_type?: number;
    public thumbnail_url?: string;
    public images?: Array<SizedUrl.SizedUrl>;
    public video?: Video.Video;
    public carousel?: Array<InstagramContent>;
    public audio_attribution?: AudioAttribution.AudioAttribution;
    public product_type?: number;
    public tracking_token?: string;
    public shopping_product_tags?: Array<ShoppingProductTag.ShoppingProductTag>;
    constructor(args?: IInstagramContentArgs) {
        if (args != null && args.content_id != null) {
            this.content_id = args.content_id;
        }
        if (args != null && args.owner != null) {
            this.owner = args.owner;
        }
        if (args != null && args.media_type != null) {
            this.media_type = args.media_type;
        }
        if (args != null && args.thumbnail_url != null) {
            this.thumbnail_url = args.thumbnail_url;
        }
        if (args != null && args.images != null) {
            this.images = args.images;
        }
        if (args != null && args.video != null) {
            this.video = args.video;
        }
        if (args != null && args.carousel != null) {
            this.carousel = args.carousel;
        }
        if (args != null && args.audio_attribution != null) {
            this.audio_attribution = args.audio_attribution;
        }
        if (args != null && args.product_type != null) {
            this.product_type = args.product_type;
        }
        if (args != null && args.tracking_token != null) {
            this.tracking_token = args.tracking_token;
        }
        if (args != null && args.shopping_product_tags != null) {
            this.shopping_product_tags = args.shopping_product_tags;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("InstagramContent");
        if (this.content_id != null) {
            output.writeFieldBegin("content_id", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.content_id);
            output.writeFieldEnd();
        }
        if (this.owner != null) {
            output.writeFieldBegin("owner", thrift.Thrift.Type.STRUCT, 2);
            this.owner.write(output);
            output.writeFieldEnd();
        }
        if (this.media_type != null) {
            output.writeFieldBegin("media_type", thrift.Thrift.Type.I32, 3);
            output.writeI32(this.media_type);
            output.writeFieldEnd();
        }
        if (this.thumbnail_url != null) {
            output.writeFieldBegin("thumbnail_url", thrift.Thrift.Type.STRING, 4);
            output.writeString(this.thumbnail_url);
            output.writeFieldEnd();
        }
        if (this.images != null) {
            output.writeFieldBegin("images", thrift.Thrift.Type.LIST, 5);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.images.length);
            this.images.forEach((value_1: SizedUrl.SizedUrl): void => {
                value_1.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.video != null) {
            output.writeFieldBegin("video", thrift.Thrift.Type.STRUCT, 6);
            this.video.write(output);
            output.writeFieldEnd();
        }
        if (this.carousel != null) {
            output.writeFieldBegin("carousel", thrift.Thrift.Type.LIST, 7);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.carousel.length);
            this.carousel.forEach((value_2: InstagramContent): void => {
                value_2.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.audio_attribution != null) {
            output.writeFieldBegin("audio_attribution", thrift.Thrift.Type.STRUCT, 8);
            this.audio_attribution.write(output);
            output.writeFieldEnd();
        }
        if (this.product_type != null) {
            output.writeFieldBegin("product_type", thrift.Thrift.Type.I32, 9);
            output.writeI32(this.product_type);
            output.writeFieldEnd();
        }
        if (this.tracking_token != null) {
            output.writeFieldBegin("tracking_token", thrift.Thrift.Type.STRING, 10);
            output.writeString(this.tracking_token);
            output.writeFieldEnd();
        }
        if (this.shopping_product_tags != null) {
            output.writeFieldBegin("shopping_product_tags", thrift.Thrift.Type.LIST, 11);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.shopping_product_tags.length);
            this.shopping_product_tags.forEach((value_3: ShoppingProductTag.ShoppingProductTag): void => {
                value_3.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): InstagramContent {
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
                        const value_4: string = input.readString();
                        _args.content_id = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_5: InstagramContentOwner.InstagramContentOwner = InstagramContentOwner.InstagramContentOwner.read(input);
                        _args.owner = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_6: number = input.readI32();
                        _args.media_type = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_7: string = input.readString();
                        _args.thumbnail_url = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_8: Array<SizedUrl.SizedUrl> = new Array<SizedUrl.SizedUrl>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_9: SizedUrl.SizedUrl = SizedUrl.SizedUrl.read(input);
                            value_8.push(value_9);
                        }
                        input.readListEnd();
                        _args.images = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_10: Video.Video = Video.Video.read(input);
                        _args.video = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_11: Array<InstagramContent> = new Array<InstagramContent>();
                        const metadata_2: thrift.TList = input.readListBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_12: InstagramContent = InstagramContent.read(input);
                            value_11.push(value_12);
                        }
                        input.readListEnd();
                        _args.carousel = value_11;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_13: AudioAttribution.AudioAttribution = AudioAttribution.AudioAttribution.read(input);
                        _args.audio_attribution = value_13;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_14: number = input.readI32();
                        _args.product_type = value_14;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 10:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_15: string = input.readString();
                        _args.tracking_token = value_15;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 11:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_16: Array<ShoppingProductTag.ShoppingProductTag> = new Array<ShoppingProductTag.ShoppingProductTag>();
                        const metadata_3: thrift.TList = input.readListBegin();
                        const size_3: number = metadata_3.size;
                        for (let i_3: number = 0; i_3 < size_3; i_3++) {
                            const value_17: ShoppingProductTag.ShoppingProductTag = ShoppingProductTag.ShoppingProductTag.read(input);
                            value_16.push(value_17);
                        }
                        input.readListEnd();
                        _args.shopping_product_tags = value_16;
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
        return new InstagramContent(_args);
    }
}