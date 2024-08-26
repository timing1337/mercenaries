/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as AutoplayOutput from "./AutoplayOutput";
export interface IParticipantOutputStateArgs {
    autoplay?: AutoplayOutput.AutoplayOutput;
}
export class ParticipantOutputState {
    public autoplay?: AutoplayOutput.AutoplayOutput;
    constructor(args?: IParticipantOutputStateArgs) {
        if (args != null && args.autoplay != null) {
            this.autoplay = args.autoplay;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ParticipantOutputState");
        if (this.autoplay != null) {
            output.writeFieldBegin("autoplay", thrift.Thrift.Type.STRUCT, 1);
            this.autoplay.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ParticipantOutputState {
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
                        const value_1: AutoplayOutput.AutoplayOutput = AutoplayOutput.AutoplayOutput.read(input);
                        _args.autoplay = value_1;
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
        return new ParticipantOutputState(_args);
    }
}