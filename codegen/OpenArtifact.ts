/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IOpenArtifactArgs {
    artifact_id?: string;
    artifact_type?: number;
    page_number?: number;
    opener_id?: string;
    unlock?: boolean;
    last_actor_id?: string;
    session_id?: string;
    message_id?: string;
}
export class OpenArtifact {
    public artifact_id?: string;
    public artifact_type?: number;
    public page_number?: number;
    public opener_id?: string;
    public unlock?: boolean;
    public last_actor_id?: string;
    public session_id?: string;
    public message_id?: string;
    constructor(args?: IOpenArtifactArgs) {
        if (args != null && args.artifact_id != null) {
            this.artifact_id = args.artifact_id;
        }
        if (args != null && args.artifact_type != null) {
            this.artifact_type = args.artifact_type;
        }
        if (args != null && args.page_number != null) {
            this.page_number = args.page_number;
        }
        if (args != null && args.opener_id != null) {
            this.opener_id = args.opener_id;
        }
        if (args != null && args.unlock != null) {
            this.unlock = args.unlock;
        }
        if (args != null && args.last_actor_id != null) {
            this.last_actor_id = args.last_actor_id;
        }
        if (args != null && args.session_id != null) {
            this.session_id = args.session_id;
        }
        if (args != null && args.message_id != null) {
            this.message_id = args.message_id;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("OpenArtifact");
        if (this.artifact_id != null) {
            output.writeFieldBegin("artifact_id", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.artifact_id);
            output.writeFieldEnd();
        }
        if (this.artifact_type != null) {
            output.writeFieldBegin("artifact_type", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.artifact_type);
            output.writeFieldEnd();
        }
        if (this.page_number != null) {
            output.writeFieldBegin("page_number", thrift.Thrift.Type.I32, 3);
            output.writeI32(this.page_number);
            output.writeFieldEnd();
        }
        if (this.opener_id != null) {
            output.writeFieldBegin("opener_id", thrift.Thrift.Type.STRING, 4);
            output.writeString(this.opener_id);
            output.writeFieldEnd();
        }
        if (this.unlock != null) {
            output.writeFieldBegin("unlock", thrift.Thrift.Type.BOOL, 5);
            output.writeBool(this.unlock);
            output.writeFieldEnd();
        }
        if (this.last_actor_id != null) {
            output.writeFieldBegin("last_actor_id", thrift.Thrift.Type.STRING, 6);
            output.writeString(this.last_actor_id);
            output.writeFieldEnd();
        }
        if (this.session_id != null) {
            output.writeFieldBegin("session_id", thrift.Thrift.Type.STRING, 7);
            output.writeString(this.session_id);
            output.writeFieldEnd();
        }
        if (this.message_id != null) {
            output.writeFieldBegin("message_id", thrift.Thrift.Type.STRING, 8);
            output.writeString(this.message_id);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): OpenArtifact {
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
                        _args.artifact_id = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_2: number = input.readI32();
                        _args.artifact_type = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_3: number = input.readI32();
                        _args.page_number = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_4: string = input.readString();
                        _args.opener_id = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_5: boolean = input.readBool();
                        _args.unlock = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_6: string = input.readString();
                        _args.last_actor_id = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_7: string = input.readString();
                        _args.session_id = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_8: string = input.readString();
                        _args.message_id = value_8;
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
        return new OpenArtifact(_args);
    }
}
