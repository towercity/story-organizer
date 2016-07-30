import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { StoryService } from './story.service';

@Component({
  selector: 'main-app',
  template: `
    <h1>{{title}} - {{author}}</h1>
    <router-outlet></router-outlet>
  `,
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
