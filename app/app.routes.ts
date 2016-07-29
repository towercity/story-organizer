import { provideRouter, RouterConfig }  from '@angular/router';
/*
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
*/
const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
