/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface ILoggingOptionsArgs {
    restrictiveLogging?: boolean;
    verboseLogging?: boolean;
}
export class LoggingOptions {
    public restrictiveLogging?: boolean;
    public verboseLogging?: boolean;
    constructor(args?: ILoggingOptionsArgs) {
        if (args != null && args.restrictiveLogging != null) {
            this.restrictiveLogging = args.restrictiveLogging;
        }
        if (args != null && args.verboseLogging != null) {
            this.verboseLogging = args.verboseLogging;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("LoggingOptions");
        if (this.restrictiveLogging != null) {
            output.writeFieldBegin("restrictiveLogging", thrift.Thrift.Type.BOOL, 1);
            output.writeBool(this.restrictiveLogging);
            output.writeFieldEnd();
        }
        if (this.verboseLogging != null) {
            output.writeFieldBegin("verboseLogging", thrift.Thrift.Type.BOOL, 2);
            output.writeBool(this.verboseLogging);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): LoggingOptions {
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
                        const value_1: boolean = input.readBool();
                        _args.restrictiveLogging = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_2: boolean = input.readBool();
                        _args.verboseLogging = value_2;
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
        return new LoggingOptions(_args);
    }
}
