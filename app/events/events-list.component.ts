import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
            <div>
              <h1>Upcoming Angular Events</h1>
              <hr>
              <event-thumbnail [event]='event1'></event-thumbnail>
            </div>
    `
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2033',
        time: '10:10 am',
        price: 597.77,
        imageUrl: 'app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}