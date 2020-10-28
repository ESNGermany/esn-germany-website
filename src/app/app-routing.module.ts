import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NetworkPageComponent } from './pages/network-page/network-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingPageComponent,
  },
  {
    path: 'our-network',
    pathMatch: 'full',
    component: NetworkPageComponent,
  },
  // { path: '**', pathMatch: 'full', redirectTo: 'error' },
  // { path: 'error', component: NotFoundPageComponent, data: { title: 'Error' } },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
