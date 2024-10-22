/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as ParticipantMediaInfo from "./ParticipantMediaInfo";
export interface IMediaInformationInputStateArgs {
    participant_media_info?: ParticipantMediaInfo.ParticipantMediaInfo;
}
export class MediaInformationInputState {
    public participant_media_info?: ParticipantMediaInfo.ParticipantMediaInfo;
    constructor(args?: IMediaInformationInputStateArgs) {
        if (args != null && args.participant_media_info != null) {
            this.participant_media_info = args.participant_media_info;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("MediaInformationInputState");
        if (this.participant_media_info != null) {
            output.writeFieldBegin("participant_media_info", thrift.Thrift.Type.STRUCT, 1);
            this.participant_media_info.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): MediaInformationInputState {
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
                        const value_1: ParticipantMediaInfo.ParticipantMediaInfo = ParticipantMediaInfo.ParticipantMediaInfo.read(input);
                        _args.participant_media_info = value_1;
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
        return new MediaInformationInputState(_args);
    }
}
