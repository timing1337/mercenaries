/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as Subscription from "./Subscription";
export interface ISubscriptionRequestArgs {
    subscriptions?: Array<Subscription.Subscription>;
}
export class SubscriptionRequest {
    public subscriptions?: Array<Subscription.Subscription>;
    constructor(args?: ISubscriptionRequestArgs) {
        if (args != null && args.subscriptions != null) {
            this.subscriptions = args.subscriptions;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("SubscriptionRequest");
        if (this.subscriptions != null) {
            output.writeFieldBegin("subscriptions", thrift.Thrift.Type.LIST, 1);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.subscriptions.length);
            this.subscriptions.forEach((value_1: Subscription.Subscription): void => {
                value_1.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): SubscriptionRequest {
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
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_2: Array<Subscription.Subscription> = new Array<Subscription.Subscription>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_3: Subscription.Subscription = Subscription.Subscription.read(input);
                            value_2.push(value_3);
                        }
                        input.readListEnd();
                        _args.subscriptions = value_2;
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
        return new SubscriptionRequest(_args);
    }
}