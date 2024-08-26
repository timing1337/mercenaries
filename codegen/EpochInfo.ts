/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import Int64 = require("node-int64");
import * as thrift from "thrift";
export interface IEpochInfoArgs {
    currentEpochId?: number | Int64;
    lastLeaveEpochId?: number | Int64;
    lastJoinEpochId?: number | Int64;
}
export class EpochInfo {
    public currentEpochId?: Int64;
    public lastLeaveEpochId?: Int64;
    public lastJoinEpochId?: Int64;
    constructor(args?: IEpochInfoArgs) {
        if (args != null && args.currentEpochId != null) {
            if (typeof args.currentEpochId === "number") {
                this.currentEpochId = new Int64(args.currentEpochId);
            }
            else {
                this.currentEpochId = args.currentEpochId;
            }
        }
        if (args != null && args.lastLeaveEpochId != null) {
            if (typeof args.lastLeaveEpochId === "number") {
                this.lastLeaveEpochId = new Int64(args.lastLeaveEpochId);
            }
            else {
                this.lastLeaveEpochId = args.lastLeaveEpochId;
            }
        }
        if (args != null && args.lastJoinEpochId != null) {
            if (typeof args.lastJoinEpochId === "number") {
                this.lastJoinEpochId = new Int64(args.lastJoinEpochId);
            }
            else {
                this.lastJoinEpochId = args.lastJoinEpochId;
            }
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("EpochInfo");
        if (this.currentEpochId != null) {
            output.writeFieldBegin("currentEpochId", thrift.Thrift.Type.I64, 1);
            output.writeI64(this.currentEpochId);
            output.writeFieldEnd();
        }
        if (this.lastLeaveEpochId != null) {
            output.writeFieldBegin("lastLeaveEpochId", thrift.Thrift.Type.I64, 2);
            output.writeI64(this.lastLeaveEpochId);
            output.writeFieldEnd();
        }
        if (this.lastJoinEpochId != null) {
            output.writeFieldBegin("lastJoinEpochId", thrift.Thrift.Type.I64, 3);
            output.writeI64(this.lastJoinEpochId);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): EpochInfo {
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
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_1: Int64 = input.readI64();
                        _args.currentEpochId = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_2: Int64 = input.readI64();
                        _args.lastLeaveEpochId = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.I64) {
                        const value_3: Int64 = input.readI64();
                        _args.lastJoinEpochId = value_3;
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
        return new EpochInfo(_args);
    }
}