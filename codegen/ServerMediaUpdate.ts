/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as Media from "./Media";
import * as SsrcGroup from "./SsrcGroup";
export interface IServerMediaUpdateArgs {
    sourceKey?: string;
    media?: Array<Media.Media>;
    ssrcGroups?: Array<SsrcGroup.SsrcGroup>;
}
export class ServerMediaUpdate {
    public sourceKey?: string;
    public media?: Array<Media.Media>;
    public ssrcGroups?: Array<SsrcGroup.SsrcGroup>;
    constructor(args?: IServerMediaUpdateArgs) {
        if (args != null && args.sourceKey != null) {
            this.sourceKey = args.sourceKey;
        }
        if (args != null && args.media != null) {
            this.media = args.media;
        }
        if (args != null && args.ssrcGroups != null) {
            this.ssrcGroups = args.ssrcGroups;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ServerMediaUpdate");
        if (this.sourceKey != null) {
            output.writeFieldBegin("sourceKey", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.sourceKey);
            output.writeFieldEnd();
        }
        if (this.media != null) {
            output.writeFieldBegin("media", thrift.Thrift.Type.LIST, 2);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.media.length);
            this.media.forEach((value_1: Media.Media): void => {
                value_1.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.ssrcGroups != null) {
            output.writeFieldBegin("ssrcGroups", thrift.Thrift.Type.LIST, 3);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.ssrcGroups.length);
            this.ssrcGroups.forEach((value_2: SsrcGroup.SsrcGroup): void => {
                value_2.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ServerMediaUpdate {
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
                        const value_3: string = input.readString();
                        _args.sourceKey = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_4: Array<Media.Media> = new Array<Media.Media>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_5: Media.Media = Media.Media.read(input);
                            value_4.push(value_5);
                        }
                        input.readListEnd();
                        _args.media = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_6: Array<SsrcGroup.SsrcGroup> = new Array<SsrcGroup.SsrcGroup>();
                        const metadata_2: thrift.TList = input.readListBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_7: SsrcGroup.SsrcGroup = SsrcGroup.SsrcGroup.read(input);
                            value_6.push(value_7);
                        }
                        input.readListEnd();
                        _args.ssrcGroups = value_6;
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
        return new ServerMediaUpdate(_args);
    }
}