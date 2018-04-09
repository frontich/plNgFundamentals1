import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventsListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {

    }
    resolve() {
        //subscribe returns subscription not observable !!!
        return this.eventService.getEvents().map(events => events);
    }
}