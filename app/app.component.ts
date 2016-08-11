import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { StoryService } from './story.service';

@Component({
  selector: 'main-app',
  templateUrl: 'templates/app.component.html',
  //styleUrls: ['styles/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    StoryService
  ]
})
export class AppComponent {
  title = 'Story Organizer';
  author = 'Matthew Nerger'
}
