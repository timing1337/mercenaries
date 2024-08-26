/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IGenericDataMessageArgs {
    topic?: string;
    data?: string;
    e2eEncryptedData?: string;
}
export class GenericDataMessage {
    public topic?: string;
    public data?: string;
    public e2eEncryptedData?: string;
    constructor(args?: IGenericDataMessageArgs) {
        if (args != null && args.topic != null) {
            this.topic = args.topic;
        }
        if (args != null && args.data != null) {
            this.data = args.data;
        }
        if (args != null && args.e2eEncryptedData != null) {
            this.e2eEncryptedData = args.e2eEncryptedData;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("GenericDataMessage");
        if (this.topic != null) {
            output.writeFieldBegin("topic", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.topic);
            output.writeFieldEnd();
        }
        if (this.data != null) {
            output.writeFieldBegin("data", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.data);
            output.writeFieldEnd();
        }
        if (this.e2eEncryptedData != null) {
            output.writeFieldBegin("e2eEncryptedData", thrift.Thrift.Type.STRING, 3);
            output.writeString(this.e2eEncryptedData);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): GenericDataMessage {
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
                        _args.topic = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_2: string = input.readString();
                        _args.data = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_3: string = input.readString();
                        _args.e2eEncryptedData = value_3;
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
        return new GenericDataMessage(_args);
    }
}