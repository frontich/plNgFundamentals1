import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav/navbar.component';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';

import { EventService } from './events/shared/event.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { ToastrService } from './common/toastr.service';

import { appRoutes } from './routes';

@NgModule({
    declarations: [
        NavBarComponent,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [EventService, EventRouteActivator, ToastrService],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}