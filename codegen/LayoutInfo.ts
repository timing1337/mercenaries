/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as LayoutExtra from "./LayoutExtra";
export interface ILayoutInfoArgs {
    layoutType?: number;
    layoutExtra?: LayoutExtra.LayoutExtra;
}
export class LayoutInfo {
    public layoutType?: number;
    public layoutExtra?: LayoutExtra.LayoutExtra;
    constructor(args?: ILayoutInfoArgs) {
        if (args != null && args.layoutType != null) {
            this.layoutType = args.layoutType;
        }
        if (args != null && args.layoutExtra != null) {
            this.layoutExtra = args.layoutExtra;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("LayoutInfo");
        if (this.layoutType != null) {
            output.writeFieldBegin("layoutType", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.layoutType);
            output.writeFieldEnd();
        }
        if (this.layoutExtra != null) {
            output.writeFieldBegin("layoutExtra", thrift.Thrift.Type.STRUCT, 2);
            this.layoutExtra.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): LayoutInfo {
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
                        _args.layoutType = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_2: LayoutExtra.LayoutExtra = LayoutExtra.LayoutExtra.read(input);
                        _args.layoutExtra = value_2;
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
        return new LayoutInfo(_args);
    }
}