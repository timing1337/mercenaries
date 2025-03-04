/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as SCTPNegotiationParticipantOutputState from "./SCTPNegotiationParticipantOutputState";
export interface IPendingSdpOfferArgs {
    outputOffer?: SCTPNegotiationParticipantOutputState.SCTPNegotiationParticipantOutputState;
    senderUserId?: string;
}
export class PendingSdpOffer {
    public outputOffer?: SCTPNegotiationParticipantOutputState.SCTPNegotiationParticipantOutputState;
    public senderUserId?: string;
    constructor(args?: IPendingSdpOfferArgs) {
        if (args != null && args.outputOffer != null) {
            this.outputOffer = args.outputOffer;
        }
        if (args != null && args.senderUserId != null) {
            this.senderUserId = args.senderUserId;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("PendingSdpOffer");
        if (this.outputOffer != null) {
            output.writeFieldBegin("outputOffer", thrift.Thrift.Type.STRUCT, 1);
            this.outputOffer.write(output);
            output.writeFieldEnd();
        }
        if (this.senderUserId != null) {
            output.writeFieldBegin("senderUserId", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.senderUserId);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): PendingSdpOffer {
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
                        const value_1: SCTPNegotiationParticipantOutputState.SCTPNegotiationParticipantOutputState = SCTPNegotiationParticipantOutputState.SCTPNegotiationParticipantOutputState.read(input);
                        _args.outputOffer = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_2: string = input.readString();
                        _args.senderUserId = value_2;
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
        return new PendingSdpOffer(_args);
    }
}
