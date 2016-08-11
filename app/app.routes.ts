import { provideRouter, RouterConfig }  from '@angular/router';

import { SeriesListComponent } from './series-list.component';
import { StatusListComponent } from './status-list.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/status',
    pathMatch: 'full'
  },
  {
    path: 'series',
    component: SeriesListComponent
  },
  {
    path: 'status',
    component: StatusListComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
