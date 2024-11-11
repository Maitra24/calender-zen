/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  create(@Body() event): any {
    return this.eventService.create(event);
  }

  @Get()
  findAll(): any {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.eventService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() event): any {
    return this.eventService.update(id, event);
  }

  @Delete(':id')
  remove(@Param('id') id: string): any {
    return this.eventService.remove(id);
  }
}
