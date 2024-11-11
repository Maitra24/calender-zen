import { EventService } from './event.service';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(event: any): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, event: any): any;
    remove(id: string): any;
}
