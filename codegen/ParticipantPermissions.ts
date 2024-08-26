/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as PollPermissions from "./PollPermissions";
import * as PollOptionPermissions from "./PollOptionPermissions";
export interface IParticipantPermissionsArgs {
    can_create?: boolean;
    poll_permissions?: Map<string, PollPermissions.PollPermissions>;
    poll_option_permissions?: Map<string, PollOptionPermissions.PollOptionPermissions>;
}
export class ParticipantPermissions {
    public can_create?: boolean;
    public poll_permissions?: Map<string, PollPermissions.PollPermissions>;
    public poll_option_permissions?: Map<string, PollOptionPermissions.PollOptionPermissions>;
    constructor(args?: IParticipantPermissionsArgs) {
        if (args != null && args.can_create != null) {
            this.can_create = args.can_create;
        }
        if (args != null && args.poll_permissions != null) {
            this.poll_permissions = args.poll_permissions;
        }
        if (args != null && args.poll_option_permissions != null) {
            this.poll_option_permissions = args.poll_option_permissions;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ParticipantPermissions");
        if (this.can_create != null) {
            output.writeFieldBegin("can_create", thrift.Thrift.Type.BOOL, 1);
            output.writeBool(this.can_create);
            output.writeFieldEnd();
        }
        if (this.poll_permissions != null) {
            output.writeFieldBegin("poll_permissions", thrift.Thrift.Type.MAP, 2);
            output.writeMapBegin(thrift.Thrift.Type.STRING, thrift.Thrift.Type.STRUCT, this.poll_permissions.size);
            this.poll_permissions.forEach((value_1: PollPermissions.PollPermissions, key_1: string): void => {
                output.writeString(key_1);
                value_1.write(output);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        if (this.poll_option_permissions != null) {
            output.writeFieldBegin("poll_option_permissions", thrift.Thrift.Type.MAP, 3);
            output.writeMapBegin(thrift.Thrift.Type.STRING, thrift.Thrift.Type.STRUCT, this.poll_option_permissions.size);
            this.poll_option_permissions.forEach((value_2: PollOptionPermissions.PollOptionPermissions, key_2: string): void => {
                output.writeString(key_2);
                value_2.write(output);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ParticipantPermissions {
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
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_3: boolean = input.readBool();
                        _args.can_create = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_4: Map<string, PollPermissions.PollPermissions> = new Map<string, PollPermissions.PollPermissions>();
                        const metadata_1: thrift.TMap = input.readMapBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const key_3: string = input.readString();
                            const value_5: PollPermissions.PollPermissions = PollPermissions.PollPermissions.read(input);
                            value_4.set(key_3, value_5);
                        }
                        input.readMapEnd();
                        _args.poll_permissions = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_6: Map<string, PollOptionPermissions.PollOptionPermissions> = new Map<string, PollOptionPermissions.PollOptionPermissions>();
                        const metadata_2: thrift.TMap = input.readMapBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const key_4: string = input.readString();
                            const value_7: PollOptionPermissions.PollOptionPermissions = PollOptionPermissions.PollOptionPermissions.read(input);
                            value_6.set(key_4, value_7);
                        }
                        input.readMapEnd();
                        _args.poll_option_permissions = value_6;
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
        return new ParticipantPermissions(_args);
    }
}