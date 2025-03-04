/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as E2eeProtocolVersion from "./E2eeProtocolVersion";
import * as E2eeClientStateConfig from "./E2eeClientStateConfig";
import * as IdentityKeyInfo from "./IdentityKeyInfo";
import * as E2eeClientStateCapability from "./E2eeClientStateCapability";
export interface IE2eeClientStateArgs {
    preKeyBundle?: string;
    cipherSuites?: Array<number>;
    protocolVersion?: E2eeProtocolVersion.E2eeProtocolVersion;
    config?: E2eeClientStateConfig.E2eeClientStateConfig;
    identityKeyInfo?: IdentityKeyInfo.IdentityKeyInfo;
    deviceId?: number;
    e2eeClientStateCapabilities?: Map<number, E2eeClientStateCapability.E2eeClientStateCapability>;
    supportedE2eeKeyNegotiationProtocols?: Array<number>;
}
export class E2eeClientState {
    public preKeyBundle?: string;
    public cipherSuites?: Array<number>;
    public protocolVersion?: E2eeProtocolVersion.E2eeProtocolVersion;
    public config?: E2eeClientStateConfig.E2eeClientStateConfig;
    public identityKeyInfo?: IdentityKeyInfo.IdentityKeyInfo;
    public deviceId?: number;
    public e2eeClientStateCapabilities?: Map<number, E2eeClientStateCapability.E2eeClientStateCapability>;
    public supportedE2eeKeyNegotiationProtocols?: Array<number>;
    constructor(args?: IE2eeClientStateArgs) {
        if (args != null && args.preKeyBundle != null) {
            this.preKeyBundle = args.preKeyBundle;
        }
        if (args != null && args.cipherSuites != null) {
            this.cipherSuites = args.cipherSuites;
        }
        if (args != null && args.protocolVersion != null) {
            this.protocolVersion = args.protocolVersion;
        }
        if (args != null && args.config != null) {
            this.config = args.config;
        }
        if (args != null && args.identityKeyInfo != null) {
            this.identityKeyInfo = args.identityKeyInfo;
        }
        if (args != null && args.deviceId != null) {
            this.deviceId = args.deviceId;
        }
        if (args != null && args.e2eeClientStateCapabilities != null) {
            this.e2eeClientStateCapabilities = args.e2eeClientStateCapabilities;
        }
        if (args != null && args.supportedE2eeKeyNegotiationProtocols != null) {
            this.supportedE2eeKeyNegotiationProtocols = args.supportedE2eeKeyNegotiationProtocols;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("E2eeClientState");
        if (this.preKeyBundle != null) {
            output.writeFieldBegin("preKeyBundle", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.preKeyBundle);
            output.writeFieldEnd();
        }
        if (this.cipherSuites != null) {
            output.writeFieldBegin("cipherSuites", thrift.Thrift.Type.LIST, 2);
            output.writeListBegin(thrift.Thrift.Type.I16, this.cipherSuites.length);
            this.cipherSuites.forEach((value_1: number): void => {
                output.writeI16(value_1);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.protocolVersion != null) {
            output.writeFieldBegin("protocolVersion", thrift.Thrift.Type.STRUCT, 3);
            this.protocolVersion.write(output);
            output.writeFieldEnd();
        }
        if (this.config != null) {
            output.writeFieldBegin("config", thrift.Thrift.Type.STRUCT, 4);
            this.config.write(output);
            output.writeFieldEnd();
        }
        if (this.identityKeyInfo != null) {
            output.writeFieldBegin("identityKeyInfo", thrift.Thrift.Type.STRUCT, 5);
            this.identityKeyInfo.write(output);
            output.writeFieldEnd();
        }
        if (this.deviceId != null) {
            output.writeFieldBegin("deviceId", thrift.Thrift.Type.I32, 6);
            output.writeI32(this.deviceId);
            output.writeFieldEnd();
        }
        if (this.e2eeClientStateCapabilities != null) {
            output.writeFieldBegin("e2eeClientStateCapabilities", thrift.Thrift.Type.MAP, 7);
            output.writeMapBegin(thrift.Thrift.Type.I32, thrift.Thrift.Type.STRUCT, this.e2eeClientStateCapabilities.size);
            this.e2eeClientStateCapabilities.forEach((value_2: E2eeClientStateCapability.E2eeClientStateCapability, key_1: number): void => {
                output.writeI32(key_1);
                value_2.write(output);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        if (this.supportedE2eeKeyNegotiationProtocols != null) {
            output.writeFieldBegin("supportedE2eeKeyNegotiationProtocols", thrift.Thrift.Type.LIST, 8);
            output.writeListBegin(thrift.Thrift.Type.I32, this.supportedE2eeKeyNegotiationProtocols.length);
            this.supportedE2eeKeyNegotiationProtocols.forEach((value_3: number): void => {
                output.writeI32(value_3);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): E2eeClientState {
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
                        const value_4: string = input.readString();
                        _args.preKeyBundle = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_5: Array<number> = new Array<number>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_6: number = input.readI16();
                            value_5.push(value_6);
                        }
                        input.readListEnd();
                        _args.cipherSuites = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_7: E2eeProtocolVersion.E2eeProtocolVersion = E2eeProtocolVersion.E2eeProtocolVersion.read(input);
                        _args.protocolVersion = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_8: E2eeClientStateConfig.E2eeClientStateConfig = E2eeClientStateConfig.E2eeClientStateConfig.read(input);
                        _args.config = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_9: IdentityKeyInfo.IdentityKeyInfo = IdentityKeyInfo.IdentityKeyInfo.read(input);
                        _args.identityKeyInfo = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_10: number = input.readI32();
                        _args.deviceId = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.MAP) {
                        const value_11: Map<number, E2eeClientStateCapability.E2eeClientStateCapability> = new Map<number, E2eeClientStateCapability.E2eeClientStateCapability>();
                        const metadata_2: thrift.TMap = input.readMapBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const key_2: number = input.readI32();
                            const value_12: E2eeClientStateCapability.E2eeClientStateCapability = E2eeClientStateCapability.E2eeClientStateCapability.read(input);
                            value_11.set(key_2, value_12);
                        }
                        input.readMapEnd();
                        _args.e2eeClientStateCapabilities = value_11;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_13: Array<number> = new Array<number>();
                        const metadata_3: thrift.TList = input.readListBegin();
                        const size_3: number = metadata_3.size;
                        for (let i_3: number = 0; i_3 < size_3; i_3++) {
                            const value_14: number = input.readI32();
                            value_13.push(value_14);
                        }
                        input.readListEnd();
                        _args.supportedE2eeKeyNegotiationProtocols = value_13;
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
        return new E2eeClientState(_args);
    }
}
