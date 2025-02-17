/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as WebrtcMessageHeader from "./WebrtcMessageHeader";
import * as WebrtcMessagePayload from "./WebrtcMessagePayload";
export interface IP2PMessageRequestArgs {
    header?: WebrtcMessageHeader.WebrtcMessageHeader;
    payload?: WebrtcMessagePayload.WebrtcMessagePayload;
}
export class P2PMessageRequest {
    public header?: WebrtcMessageHeader.WebrtcMessageHeader;
    public payload?: WebrtcMessagePayload.WebrtcMessagePayload;
    constructor(args?: IP2PMessageRequestArgs) {
        if (args != null && args.header != null) {
            this.header = args.header;
        }
        if (args != null && args.payload != null) {
            this.payload = args.payload;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("P2PMessageRequest");
        if (this.header != null) {
            output.writeFieldBegin("header", thrift.Thrift.Type.STRUCT, 1);
            this.header.write(output);
            output.writeFieldEnd();
        }
        if (this.payload != null) {
            output.writeFieldBegin("payload", thrift.Thrift.Type.STRUCT, 2);
            this.payload.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): P2PMessageRequest {
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
                        const value_1: WebrtcMessageHeader.WebrtcMessageHeader = WebrtcMessageHeader.WebrtcMessageHeader.read(input);
                        _args.header = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_2: WebrtcMessagePayload.WebrtcMessagePayload = WebrtcMessagePayload.WebrtcMessagePayload.read(input);
                        _args.payload = value_2;
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
        return new P2PMessageRequest(_args);
    }
}
