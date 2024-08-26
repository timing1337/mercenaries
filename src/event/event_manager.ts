import { EventType } from '../event/event_type';

export class EventManager {
    public static events: Map<EventType, CallableFunction[]> = new Map<EventType, CallableFunction[]>();

    public static init() {}

    public static registerCallback(event: EventType, func: CallableFunction) {
        if (!this.events.has(event)) this.events.set(event, []);
        this.events.get(event)!.push(func);
    }

    public static call(event: EventType, ...args: object[]) {
        if (!this.events.has(event)) return;
        for (const func of this.events.get(event)!.values()) {
            func(...args);
        }
    }
}
