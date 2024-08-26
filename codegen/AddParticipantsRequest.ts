/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as DataMessage from "./DataMessage";
export interface IAddParticipantsRequestArgs {
    usersToInvite?: Set<string>;
    appMessages?: Array<DataMessage.DataMessage>;
}
export class AddParticipantsRequest {
    public usersToInvite?: Set<string>;
    public appMessages?: Array<DataMessage.DataMessage>;
    constructor(args?: IAddParticipantsRequestArgs) {
        if (args != null && args.usersToInvite != null) {
            this.usersToInvite = args.usersToInvite;
        }
        if (args != null && args.appMessages != null) {
            this.appMessages = args.appMessages;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("AddParticipantsRequest");
        if (this.usersToInvite != null) {
            output.writeFieldBegin("usersToInvite", thrift.Thrift.Type.SET, 1);
            output.writeSetBegin(thrift.Thrift.Type.STRING, this.usersToInvite.size);
            this.usersToInvite.forEach((value_1: string): void => {
                output.writeString(value_1);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        if (this.appMessages != null) {
            output.writeFieldBegin("appMessages", thrift.Thrift.Type.LIST, 2);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.appMessages.length);
            this.appMessages.forEach((value_2: DataMessage.DataMessage): void => {
                value_2.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): AddParticipantsRequest {
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
                    if (fieldType === thrift.Thrift.Type.SET) {
                        const value_3: Set<string> = new Set<string>();
                        const metadata_1: thrift.TSet = input.readSetBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_4: string = input.readString();
                            value_3.add(value_4);
                        }
                        input.readSetEnd();
                        _args.usersToInvite = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_5: Array<DataMessage.DataMessage> = new Array<DataMessage.DataMessage>();
                        const metadata_2: thrift.TList = input.readListBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_6: DataMessage.DataMessage = DataMessage.DataMessage.read(input);
                            value_5.push(value_6);
                        }
                        input.readListEnd();
                        _args.appMessages = value_5;
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
        return new AddParticipantsRequest(_args);
    }
}