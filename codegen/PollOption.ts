/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as Content from "./Content";
import * as PollParticipant from "./PollParticipant";
export interface IPollOptionArgs {
    id?: string;
    content?: Content.Content;
    voters?: Array<PollParticipant.PollParticipant>;
    vote_fraction?: number;
}
export class PollOption {
    public id?: string;
    public content?: Content.Content;
    public voters?: Array<PollParticipant.PollParticipant>;
    public vote_fraction?: number;
    constructor(args?: IPollOptionArgs) {
        if (args != null && args.id != null) {
            this.id = args.id;
        }
        if (args != null && args.content != null) {
            this.content = args.content;
        }
        if (args != null && args.voters != null) {
            this.voters = args.voters;
        }
        if (args != null && args.vote_fraction != null) {
            this.vote_fraction = args.vote_fraction;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("PollOption");
        if (this.id != null) {
            output.writeFieldBegin("id", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.id);
            output.writeFieldEnd();
        }
        if (this.content != null) {
            output.writeFieldBegin("content", thrift.Thrift.Type.STRUCT, 2);
            this.content.write(output);
            output.writeFieldEnd();
        }
        if (this.voters != null) {
            output.writeFieldBegin("voters", thrift.Thrift.Type.LIST, 3);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.voters.length);
            this.voters.forEach((value_1: PollParticipant.PollParticipant): void => {
                value_1.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.vote_fraction != null) {
            output.writeFieldBegin("vote_fraction", thrift.Thrift.Type.DOUBLE, 4);
            output.writeDouble(this.vote_fraction);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): PollOption {
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
                        const value_2: string = input.readString();
                        _args.id = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_3: Content.Content = Content.Content.read(input);
                        _args.content = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_4: Array<PollParticipant.PollParticipant> = new Array<PollParticipant.PollParticipant>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_5: PollParticipant.PollParticipant = PollParticipant.PollParticipant.read(input);
                            value_4.push(value_5);
                        }
                        input.readListEnd();
                        _args.voters = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.DOUBLE) {
                        const value_6: number = input.readDouble();
                        _args.vote_fraction = value_6;
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
        return new PollOption(_args);
    }
}