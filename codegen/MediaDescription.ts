/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as Extmap from "./Extmap";
import * as CryptoParam from "./CryptoParam";
import * as CodecDescription from "./CodecDescription";
import * as SsrcObject from "./SsrcObject";
import * as IceCandidateSdp from "./IceCandidateSdp";
import * as SsrcGroup from "./SsrcGroup";
import * as Bandwidth from "./Bandwidth";
export interface IMediaDescriptionArgs {
    mediaType?: number;
    port?: number;
    protocol?: number;
    fmt?: string;
    mediaIceUserFrag?: string;
    mediaIcePassword?: string;
    mediaIceOptions?: Array<string>;
    mediaSslFingerprintHash?: string;
    mediaSslFingerprintDigest?: string;
    extmaps?: Array<Extmap.Extmap>;
    sendRecvMode?: number;
    hasRtcpMux?: boolean;
    rtcpReducedSize?: boolean;
    cryptoParams?: Array<CryptoParam.CryptoParam>;
    codecs?: Array<CodecDescription.CodecDescription>;
    maxPTime?: number;
    pTime?: number;
    ssrcObjects?: Array<SsrcObject.SsrcObject>;
    candidates?: Array<IceCandidateSdp.IceCandidateSdp>;
    conferenceMode?: boolean;
    ssrcGroups?: Array<SsrcGroup.SsrcGroup>;
    connectionRole?: number;
    mid?: string;
    bandwidth?: Bandwidth.Bandwidth;
    sctpPort?: number;
}
export class MediaDescription {
    public mediaType?: number;
    public port?: number;
    public protocol?: number;
    public fmt?: string;
    public mediaIceUserFrag?: string;
    public mediaIcePassword?: string;
    public mediaIceOptions?: Array<string>;
    public mediaSslFingerprintHash?: string;
    public mediaSslFingerprintDigest?: string;
    public extmaps?: Array<Extmap.Extmap>;
    public sendRecvMode?: number;
    public hasRtcpMux?: boolean;
    public rtcpReducedSize?: boolean;
    public cryptoParams?: Array<CryptoParam.CryptoParam>;
    public codecs?: Array<CodecDescription.CodecDescription>;
    public maxPTime?: number;
    public pTime?: number;
    public ssrcObjects?: Array<SsrcObject.SsrcObject>;
    public candidates?: Array<IceCandidateSdp.IceCandidateSdp>;
    public conferenceMode?: boolean;
    public ssrcGroups?: Array<SsrcGroup.SsrcGroup>;
    public connectionRole?: number;
    public mid?: string;
    public bandwidth?: Bandwidth.Bandwidth;
    public sctpPort?: number;
    constructor(args?: IMediaDescriptionArgs) {
        if (args != null && args.mediaType != null) {
            this.mediaType = args.mediaType;
        }
        if (args != null && args.port != null) {
            this.port = args.port;
        }
        if (args != null && args.protocol != null) {
            this.protocol = args.protocol;
        }
        if (args != null && args.fmt != null) {
            this.fmt = args.fmt;
        }
        if (args != null && args.mediaIceUserFrag != null) {
            this.mediaIceUserFrag = args.mediaIceUserFrag;
        }
        if (args != null && args.mediaIcePassword != null) {
            this.mediaIcePassword = args.mediaIcePassword;
        }
        if (args != null && args.mediaIceOptions != null) {
            this.mediaIceOptions = args.mediaIceOptions;
        }
        if (args != null && args.mediaSslFingerprintHash != null) {
            this.mediaSslFingerprintHash = args.mediaSslFingerprintHash;
        }
        if (args != null && args.mediaSslFingerprintDigest != null) {
            this.mediaSslFingerprintDigest = args.mediaSslFingerprintDigest;
        }
        if (args != null && args.extmaps != null) {
            this.extmaps = args.extmaps;
        }
        if (args != null && args.sendRecvMode != null) {
            this.sendRecvMode = args.sendRecvMode;
        }
        if (args != null && args.hasRtcpMux != null) {
            this.hasRtcpMux = args.hasRtcpMux;
        }
        if (args != null && args.rtcpReducedSize != null) {
            this.rtcpReducedSize = args.rtcpReducedSize;
        }
        if (args != null && args.cryptoParams != null) {
            this.cryptoParams = args.cryptoParams;
        }
        if (args != null && args.codecs != null) {
            this.codecs = args.codecs;
        }
        if (args != null && args.maxPTime != null) {
            this.maxPTime = args.maxPTime;
        }
        if (args != null && args.pTime != null) {
            this.pTime = args.pTime;
        }
        if (args != null && args.ssrcObjects != null) {
            this.ssrcObjects = args.ssrcObjects;
        }
        if (args != null && args.candidates != null) {
            this.candidates = args.candidates;
        }
        if (args != null && args.conferenceMode != null) {
            this.conferenceMode = args.conferenceMode;
        }
        if (args != null && args.ssrcGroups != null) {
            this.ssrcGroups = args.ssrcGroups;
        }
        if (args != null && args.connectionRole != null) {
            this.connectionRole = args.connectionRole;
        }
        if (args != null && args.mid != null) {
            this.mid = args.mid;
        }
        if (args != null && args.bandwidth != null) {
            this.bandwidth = args.bandwidth;
        }
        if (args != null && args.sctpPort != null) {
            this.sctpPort = args.sctpPort;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("MediaDescription");
        if (this.mediaType != null) {
            output.writeFieldBegin("mediaType", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.mediaType);
            output.writeFieldEnd();
        }
        if (this.port != null) {
            output.writeFieldBegin("port", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.port);
            output.writeFieldEnd();
        }
        if (this.protocol != null) {
            output.writeFieldBegin("protocol", thrift.Thrift.Type.I32, 3);
            output.writeI32(this.protocol);
            output.writeFieldEnd();
        }
        if (this.fmt != null) {
            output.writeFieldBegin("fmt", thrift.Thrift.Type.STRING, 22);
            output.writeString(this.fmt);
            output.writeFieldEnd();
        }
        if (this.mediaIceUserFrag != null) {
            output.writeFieldBegin("mediaIceUserFrag", thrift.Thrift.Type.STRING, 4);
            output.writeString(this.mediaIceUserFrag);
            output.writeFieldEnd();
        }
        if (this.mediaIcePassword != null) {
            output.writeFieldBegin("mediaIcePassword", thrift.Thrift.Type.STRING, 5);
            output.writeString(this.mediaIcePassword);
            output.writeFieldEnd();
        }
        if (this.mediaIceOptions != null) {
            output.writeFieldBegin("mediaIceOptions", thrift.Thrift.Type.LIST, 6);
            output.writeListBegin(thrift.Thrift.Type.STRING, this.mediaIceOptions.length);
            this.mediaIceOptions.forEach((value_1: string): void => {
                output.writeString(value_1);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.mediaSslFingerprintHash != null) {
            output.writeFieldBegin("mediaSslFingerprintHash", thrift.Thrift.Type.STRING, 7);
            output.writeString(this.mediaSslFingerprintHash);
            output.writeFieldEnd();
        }
        if (this.mediaSslFingerprintDigest != null) {
            output.writeFieldBegin("mediaSslFingerprintDigest", thrift.Thrift.Type.STRING, 8);
            output.writeString(this.mediaSslFingerprintDigest);
            output.writeFieldEnd();
        }
        if (this.extmaps != null) {
            output.writeFieldBegin("extmaps", thrift.Thrift.Type.LIST, 9);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.extmaps.length);
            this.extmaps.forEach((value_2: Extmap.Extmap): void => {
                value_2.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.sendRecvMode != null) {
            output.writeFieldBegin("sendRecvMode", thrift.Thrift.Type.I32, 10);
            output.writeI32(this.sendRecvMode);
            output.writeFieldEnd();
        }
        if (this.hasRtcpMux != null) {
            output.writeFieldBegin("hasRtcpMux", thrift.Thrift.Type.BOOL, 11);
            output.writeBool(this.hasRtcpMux);
            output.writeFieldEnd();
        }
        if (this.rtcpReducedSize != null) {
            output.writeFieldBegin("rtcpReducedSize", thrift.Thrift.Type.BOOL, 25);
            output.writeBool(this.rtcpReducedSize);
            output.writeFieldEnd();
        }
        if (this.cryptoParams != null) {
            output.writeFieldBegin("cryptoParams", thrift.Thrift.Type.LIST, 12);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.cryptoParams.length);
            this.cryptoParams.forEach((value_3: CryptoParam.CryptoParam): void => {
                value_3.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.codecs != null) {
            output.writeFieldBegin("codecs", thrift.Thrift.Type.LIST, 13);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.codecs.length);
            this.codecs.forEach((value_4: CodecDescription.CodecDescription): void => {
                value_4.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.maxPTime != null) {
            output.writeFieldBegin("maxPTime", thrift.Thrift.Type.I32, 14);
            output.writeI32(this.maxPTime);
            output.writeFieldEnd();
        }
        if (this.pTime != null) {
            output.writeFieldBegin("pTime", thrift.Thrift.Type.I32, 15);
            output.writeI32(this.pTime);
            output.writeFieldEnd();
        }
        if (this.ssrcObjects != null) {
            output.writeFieldBegin("ssrcObjects", thrift.Thrift.Type.LIST, 16);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.ssrcObjects.length);
            this.ssrcObjects.forEach((value_5: SsrcObject.SsrcObject): void => {
                value_5.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.candidates != null) {
            output.writeFieldBegin("candidates", thrift.Thrift.Type.LIST, 17);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.candidates.length);
            this.candidates.forEach((value_6: IceCandidateSdp.IceCandidateSdp): void => {
                value_6.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.conferenceMode != null) {
            output.writeFieldBegin("conferenceMode", thrift.Thrift.Type.BOOL, 18);
            output.writeBool(this.conferenceMode);
            output.writeFieldEnd();
        }
        if (this.ssrcGroups != null) {
            output.writeFieldBegin("ssrcGroups", thrift.Thrift.Type.LIST, 19);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.ssrcGroups.length);
            this.ssrcGroups.forEach((value_7: SsrcGroup.SsrcGroup): void => {
                value_7.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.connectionRole != null) {
            output.writeFieldBegin("connectionRole", thrift.Thrift.Type.I32, 20);
            output.writeI32(this.connectionRole);
            output.writeFieldEnd();
        }
        if (this.mid != null) {
            output.writeFieldBegin("mid", thrift.Thrift.Type.STRING, 21);
            output.writeString(this.mid);
            output.writeFieldEnd();
        }
        if (this.bandwidth != null) {
            output.writeFieldBegin("bandwidth", thrift.Thrift.Type.STRUCT, 23);
            this.bandwidth.write(output);
            output.writeFieldEnd();
        }
        if (this.sctpPort != null) {
            output.writeFieldBegin("sctpPort", thrift.Thrift.Type.I32, 24);
            output.writeI32(this.sctpPort);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): MediaDescription {
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
                        const value_8: number = input.readI32();
                        _args.mediaType = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_9: number = input.readI32();
                        _args.port = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_10: number = input.readI32();
                        _args.protocol = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 22:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_11: string = input.readString();
                        _args.fmt = value_11;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_12: string = input.readString();
                        _args.mediaIceUserFrag = value_12;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_13: string = input.readString();
                        _args.mediaIcePassword = value_13;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_14: Array<string> = new Array<string>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_15: string = input.readString();
                            value_14.push(value_15);
                        }
                        input.readListEnd();
                        _args.mediaIceOptions = value_14;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_16: string = input.readString();
                        _args.mediaSslFingerprintHash = value_16;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_17: string = input.readString();
                        _args.mediaSslFingerprintDigest = value_17;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_18: Array<Extmap.Extmap> = new Array<Extmap.Extmap>();
                        const metadata_2: thrift.TList = input.readListBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_19: Extmap.Extmap = Extmap.Extmap.read(input);
                            value_18.push(value_19);
                        }
                        input.readListEnd();
                        _args.extmaps = value_18;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 10:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_20: number = input.readI32();
                        _args.sendRecvMode = value_20;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 11:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_21: boolean = input.readBool();
                        _args.hasRtcpMux = value_21;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 25:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_22: boolean = input.readBool();
                        _args.rtcpReducedSize = value_22;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 12:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_23: Array<CryptoParam.CryptoParam> = new Array<CryptoParam.CryptoParam>();
                        const metadata_3: thrift.TList = input.readListBegin();
                        const size_3: number = metadata_3.size;
                        for (let i_3: number = 0; i_3 < size_3; i_3++) {
                            const value_24: CryptoParam.CryptoParam = CryptoParam.CryptoParam.read(input);
                            value_23.push(value_24);
                        }
                        input.readListEnd();
                        _args.cryptoParams = value_23;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 13:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_25: Array<CodecDescription.CodecDescription> = new Array<CodecDescription.CodecDescription>();
                        const metadata_4: thrift.TList = input.readListBegin();
                        const size_4: number = metadata_4.size;
                        for (let i_4: number = 0; i_4 < size_4; i_4++) {
                            const value_26: CodecDescription.CodecDescription = CodecDescription.CodecDescription.read(input);
                            value_25.push(value_26);
                        }
                        input.readListEnd();
                        _args.codecs = value_25;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 14:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_27: number = input.readI32();
                        _args.maxPTime = value_27;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 15:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_28: number = input.readI32();
                        _args.pTime = value_28;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 16:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_29: Array<SsrcObject.SsrcObject> = new Array<SsrcObject.SsrcObject>();
                        const metadata_5: thrift.TList = input.readListBegin();
                        const size_5: number = metadata_5.size;
                        for (let i_5: number = 0; i_5 < size_5; i_5++) {
                            const value_30: SsrcObject.SsrcObject = SsrcObject.SsrcObject.read(input);
                            value_29.push(value_30);
                        }
                        input.readListEnd();
                        _args.ssrcObjects = value_29;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 17:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_31: Array<IceCandidateSdp.IceCandidateSdp> = new Array<IceCandidateSdp.IceCandidateSdp>();
                        const metadata_6: thrift.TList = input.readListBegin();
                        const size_6: number = metadata_6.size;
                        for (let i_6: number = 0; i_6 < size_6; i_6++) {
                            const value_32: IceCandidateSdp.IceCandidateSdp = IceCandidateSdp.IceCandidateSdp.read(input);
                            value_31.push(value_32);
                        }
                        input.readListEnd();
                        _args.candidates = value_31;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 18:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_33: boolean = input.readBool();
                        _args.conferenceMode = value_33;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 19:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_34: Array<SsrcGroup.SsrcGroup> = new Array<SsrcGroup.SsrcGroup>();
                        const metadata_7: thrift.TList = input.readListBegin();
                        const size_7: number = metadata_7.size;
                        for (let i_7: number = 0; i_7 < size_7; i_7++) {
                            const value_35: SsrcGroup.SsrcGroup = SsrcGroup.SsrcGroup.read(input);
                            value_34.push(value_35);
                        }
                        input.readListEnd();
                        _args.ssrcGroups = value_34;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 20:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_36: number = input.readI32();
                        _args.connectionRole = value_36;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 21:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_37: string = input.readString();
                        _args.mid = value_37;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 23:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_38: Bandwidth.Bandwidth = Bandwidth.Bandwidth.read(input);
                        _args.bandwidth = value_38;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 24:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_39: number = input.readI32();
                        _args.sctpPort = value_39;
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
        return new MediaDescription(_args);
    }
}
