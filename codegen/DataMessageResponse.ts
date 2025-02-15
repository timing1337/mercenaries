/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IDataMessageResponseArgs {
    deliveryResult?: Map<string, number>;
    serviceTypeDeliveryResult?: Map<number, number>;
}
export class DataMessageResponse {
    public deliveryResult?: Map<string, number>;
    public serviceTypeDeliveryResult?: Map<number, number>;
    constructor(args?: IDataMessageResponseArgs) {
        if (args != null && args.deliveryResult != null) {
            this.deliveryResult = args.deliveryResult;
        }
        if (args != null && args.serviceTypeDeliveryResult != null) {
            this.serviceTypeDeliveryResult = args.serviceTypeDeliveryResult;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("DataMessageResponse");
        if (this.deliveryResult != null) {
            output.writeFieldBegin("deliveryResult", thrift.Thrift.Type.MAP, 1);
            output.writeMapBegin(thrift.Thrift.Type.STRING, thrift.Thrift.Type.I32, this.deliveryResult.size);
            this.deliveryResult.forEach((value_1: number, key_1: string): void => {
                output.writeString(key_1);
                output.writeI32(value_1);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        if (this.serviceTypeDeliveryResult != null) {
            output.writeFieldBegin("serviceTypeDeliveryResult", thrift.Thrift.Type.MAP, 2);
            output.writeMapBegin(thrift.Thrift.Type.I32, thrift.Thrift.Type.I32, this.serviceTypeDeliveryResult.size);
            this.serviceTypeDeliveryResult.forEach((value_2: number, key_2: number): void => {
                output.writeI32(key_2);
                output.writeI32(value_2);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): DataMessageResponse {
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
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_3: Map<string, number> = new Map<string, number>();
                        const metadata_1: thrift.TMap = input.readMapBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const key_3: string = input.readString();
                            const value_4: number = input.readI32();
                            value_3.set(key_3, value_4);
                        }
                        input.readMapEnd();
                        _args.deliveryResult = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_5: Map<number, number> = new Map<number, number>();
                        const metadata_2: thrift.TMap = input.readMapBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const key_4: number = input.readI32();
                            const value_6: number = input.readI32();
                            value_5.set(key_4, value_6);
                        }
                        input.readMapEnd();
                        _args.serviceTypeDeliveryResult = value_5;
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
        return new DataMessageResponse(_args);
    }
}
