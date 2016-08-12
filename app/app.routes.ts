import { provideRouter, RouterConfig }  from '@angular/router';

import { SeriesListComponent } from './series-list.component';
import { StatusListComponent } from './status-list.component';
import { TableComponent } from './table.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/table',
    pathMatch: 'full'
  },
  {
    path: 'series',
    component: SeriesListComponent
  },
  {
    path: 'status',
    component: StatusListComponent
  },
  {
    path: 'table',
    component: TableComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
