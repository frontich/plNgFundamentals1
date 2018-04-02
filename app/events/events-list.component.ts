import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent {
    event = {
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