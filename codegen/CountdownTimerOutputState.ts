/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as CountdownTimer from "./CountdownTimer";
export interface ICountdownTimerOutputStateArgs {
    timer?: CountdownTimer.CountdownTimer;
    is_countdown_timer_feature_enabled?: boolean;
    participant_action_capabilities?: Set<number>;
}
export class CountdownTimerOutputState {
    public timer?: CountdownTimer.CountdownTimer;
    public is_countdown_timer_feature_enabled?: boolean;
    public participant_action_capabilities?: Set<number>;
    constructor(args?: ICountdownTimerOutputStateArgs) {
        if (args != null && args.timer != null) {
            this.timer = args.timer;
        }
        if (args != null && args.is_countdown_timer_feature_enabled != null) {
            this.is_countdown_timer_feature_enabled = args.is_countdown_timer_feature_enabled;
        }
        if (args != null && args.participant_action_capabilities != null) {
            this.participant_action_capabilities = args.participant_action_capabilities;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("CountdownTimerOutputState");
        if (this.timer != null) {
            output.writeFieldBegin("timer", thrift.Thrift.Type.STRUCT, 1);
            this.timer.write(output);
            output.writeFieldEnd();
        }
        if (this.is_countdown_timer_feature_enabled != null) {
            output.writeFieldBegin("is_countdown_timer_feature_enabled", thrift.Thrift.Type.BOOL, 2);
            output.writeBool(this.is_countdown_timer_feature_enabled);
            output.writeFieldEnd();
        }
        if (this.participant_action_capabilities != null) {
            output.writeFieldBegin("participant_action_capabilities", thrift.Thrift.Type.SET, 3);
            output.writeSetBegin(thrift.Thrift.Type.I32, this.participant_action_capabilities.size);
            this.participant_action_capabilities.forEach((value_1: number): void => {
                output.writeI32(value_1);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): CountdownTimerOutputState {
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
                        const value_2: CountdownTimer.CountdownTimer = CountdownTimer.CountdownTimer.read(input);
                        _args.timer = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_3: boolean = input.readBool();
                        _args.is_countdown_timer_feature_enabled = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.SET) {
                        const value_4: Set<number> = new Set<number>();
                        const metadata_1: thrift.TSet = input.readSetBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_5: number = input.readI32();
                            value_4.add(value_5);
                        }
                        input.readSetEnd();
                        _args.participant_action_capabilities = value_4;
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
        return new CountdownTimerOutputState(_args);
    }
}
