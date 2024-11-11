interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
}
export declare class EventService {
    private events;
    create(event: Event): Event;
    findAll(): Event[];
    findOne(id: string): Event;
    update(id: string, event: Event): Event;
    remove(id: string): boolean;
}
export {};
