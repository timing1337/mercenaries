/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as Poll from "./Poll";
import * as ParticipantPermissions from "./ParticipantPermissions";
export interface IPollsParticipantOutputStateArgs {
    polls?: Array<Poll.Poll>;
    processed_action_uuids?: Set<string>;
    permissions?: ParticipantPermissions.ParticipantPermissions;
    is_creation_enabled?: boolean;
}
export class PollsParticipantOutputState {
    public polls?: Array<Poll.Poll>;
    public processed_action_uuids?: Set<string>;
    public permissions?: ParticipantPermissions.ParticipantPermissions;
    public is_creation_enabled?: boolean;
    constructor(args?: IPollsParticipantOutputStateArgs) {
        if (args != null && args.polls != null) {
            this.polls = args.polls;
        }
        if (args != null && args.processed_action_uuids != null) {
            this.processed_action_uuids = args.processed_action_uuids;
        }
        if (args != null && args.permissions != null) {
            this.permissions = args.permissions;
        }
        if (args != null && args.is_creation_enabled != null) {
            this.is_creation_enabled = args.is_creation_enabled;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("PollsParticipantOutputState");
        if (this.polls != null) {
            output.writeFieldBegin("polls", thrift.Thrift.Type.LIST, 1);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.polls.length);
            this.polls.forEach((value_1: Poll.Poll): void => {
                value_1.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.processed_action_uuids != null) {
            output.writeFieldBegin("processed_action_uuids", thrift.Thrift.Type.SET, 2);
            output.writeSetBegin(thrift.Thrift.Type.STRING, this.processed_action_uuids.size);
            this.processed_action_uuids.forEach((value_2: string): void => {
                output.writeString(value_2);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        if (this.permissions != null) {
            output.writeFieldBegin("permissions", thrift.Thrift.Type.STRUCT, 3);
            this.permissions.write(output);
            output.writeFieldEnd();
        }
        if (this.is_creation_enabled != null) {
            output.writeFieldBegin("is_creation_enabled", thrift.Thrift.Type.BOOL, 4);
            output.writeBool(this.is_creation_enabled);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): PollsParticipantOutputState {
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
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_3: Array<Poll.Poll> = new Array<Poll.Poll>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_4: Poll.Poll = Poll.Poll.read(input);
                            value_3.push(value_4);
                        }
                        input.readListEnd();
                        _args.polls = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.SET) {
                        const value_5: Set<string> = new Set<string>();
                        const metadata_2: thrift.TSet = input.readSetBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_6: string = input.readString();
                            value_5.add(value_6);
                        }
                        input.readSetEnd();
                        _args.processed_action_uuids = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_7: ParticipantPermissions.ParticipantPermissions = ParticipantPermissions.ParticipantPermissions.read(input);
                        _args.permissions = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_8: boolean = input.readBool();
                        _args.is_creation_enabled = value_8;
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
        return new PollsParticipantOutputState(_args);
    }
}