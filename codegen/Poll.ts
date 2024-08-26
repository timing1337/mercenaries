/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as PollParticipant from "./PollParticipant";
import * as PollOption from "./PollOption";
export interface IPollArgs {
    id?: string;
    creator?: PollParticipant.PollParticipant;
    title?: string;
    options?: Array<PollOption.PollOption>;
    type?: number;
    state?: number;
}
export class Poll {
    public id?: string;
    public creator?: PollParticipant.PollParticipant;
    public title?: string;
    public options?: Array<PollOption.PollOption>;
    public type?: number;
    public state?: number;
    constructor(args?: IPollArgs) {
        if (args != null && args.id != null) {
            this.id = args.id;
        }
        if (args != null && args.creator != null) {
            this.creator = args.creator;
        }
        if (args != null && args.title != null) {
            this.title = args.title;
        }
        if (args != null && args.options != null) {
            this.options = args.options;
        }
        if (args != null && args.type != null) {
            this.type = args.type;
        }
        if (args != null && args.state != null) {
            this.state = args.state;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("Poll");
        if (this.id != null) {
            output.writeFieldBegin("id", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.id);
            output.writeFieldEnd();
        }
        if (this.creator != null) {
            output.writeFieldBegin("creator", thrift.Thrift.Type.STRUCT, 2);
            this.creator.write(output);
            output.writeFieldEnd();
        }
        if (this.title != null) {
            output.writeFieldBegin("title", thrift.Thrift.Type.STRING, 3);
            output.writeString(this.title);
            output.writeFieldEnd();
        }
        if (this.options != null) {
            output.writeFieldBegin("options", thrift.Thrift.Type.LIST, 4);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.options.length);
            this.options.forEach((value_1: PollOption.PollOption): void => {
                value_1.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.type != null) {
            output.writeFieldBegin("type", thrift.Thrift.Type.I32, 5);
            output.writeI32(this.type);
            output.writeFieldEnd();
        }
        if (this.state != null) {
            output.writeFieldBegin("state", thrift.Thrift.Type.I32, 6);
            output.writeI32(this.state);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): Poll {
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
                        const value_3: PollParticipant.PollParticipant = PollParticipant.PollParticipant.read(input);
                        _args.creator = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_4: string = input.readString();
                        _args.title = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_5: Array<PollOption.PollOption> = new Array<PollOption.PollOption>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_6: PollOption.PollOption = PollOption.PollOption.read(input);
                            value_5.push(value_6);
                        }
                        input.readListEnd();
                        _args.options = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_7: number = input.readI32();
                        _args.type = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_8: number = input.readI32();
                        _args.state = value_8;
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
        return new Poll(_args);
    }
}