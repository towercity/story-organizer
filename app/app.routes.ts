import { provideRouter, RouterConfig }  from '@angular/router';

import { ListComponent } from './list.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
