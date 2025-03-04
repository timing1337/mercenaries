/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IDeviceStatsTriggersArgs {
    temperatureStatus?: number;
    batteryStatus?: number;
    cpuStatus?: number;
}
export class DeviceStatsTriggers {
    public temperatureStatus?: number;
    public batteryStatus?: number;
    public cpuStatus?: number;
    constructor(args?: IDeviceStatsTriggersArgs) {
        if (args != null && args.temperatureStatus != null) {
            this.temperatureStatus = args.temperatureStatus;
        }
        if (args != null && args.batteryStatus != null) {
            this.batteryStatus = args.batteryStatus;
        }
        if (args != null && args.cpuStatus != null) {
            this.cpuStatus = args.cpuStatus;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("DeviceStatsTriggers");
        if (this.temperatureStatus != null) {
            output.writeFieldBegin("temperatureStatus", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.temperatureStatus);
            output.writeFieldEnd();
        }
        if (this.batteryStatus != null) {
            output.writeFieldBegin("batteryStatus", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.batteryStatus);
            output.writeFieldEnd();
        }
        if (this.cpuStatus != null) {
            output.writeFieldBegin("cpuStatus", thrift.Thrift.Type.I32, 3);
            output.writeI32(this.cpuStatus);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): DeviceStatsTriggers {
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
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_1: number = input.readI32();
                        _args.temperatureStatus = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_2: number = input.readI32();
                        _args.batteryStatus = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_3: number = input.readI32();
                        _args.cpuStatus = value_3;
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
        return new DeviceStatsTriggers(_args);
    }
}
