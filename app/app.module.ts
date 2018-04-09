import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav/navbar.component';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';

import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

import { appRoutes } from './routes';

@NgModule({
    declarations: [
        NavBarComponent,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent
    ],
    providers: [EventService, ToastrService],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}