import { provideRouter, RouterConfig }  from '@angular/router';

import { StatusListComponent } from './status-list.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/status-list',
    pathMatch: 'full'
  },
  {
    path: 'status-list',
    component: StatusListComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
