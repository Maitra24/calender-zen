/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string; // Can be ISO format for simplicity
}

@Injectable()
export class EventService {
  private events: Map<string, Event> = new Map();

  create(event: Event): Event {
    this.events.set(event.id, event);
    return event;
  }

  findAll(): Event[] {
    return Array.from(this.events.values());
  }

  findOne(id: string): Event {
    return this.events.get(id);
  }

  update(id: string, event: Event): Event {
    this.events.set(id, event);
    return event;
  }

  remove(id: string): boolean {
    return this.events.delete(id);
  }
}
