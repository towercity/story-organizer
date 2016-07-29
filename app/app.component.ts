import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'main-app',
  template: `
    <h1>{{title}} - {{author}}</h1>
    <router-outlet></router-outlet>
  `,
  //styleUrls: ['styles/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [

  ]
})
export class AppComponent {
  title = 'Story Organizer';
  author = 'Matthew Nerger'
}
