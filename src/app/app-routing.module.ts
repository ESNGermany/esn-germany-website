import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NetworkPageComponent } from './pages/network-page/network-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { PartnersPageComponent } from './pages/partners-page/partners-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingPageComponent,
  },
  {
    path: 'our-network',
    component: NetworkPageComponent,
  },
  {
    path: 'for-students',
    component: StudentsPageComponent,
  },
  {
    path: 'for-partners',
    component: PartnersPageComponent,
  },
  // { path: '**', pathMatch: 'full', redirectTo: 'error' },
  // { path: 'error', component: NotFoundPageComponent, data: { title: 'Error' } },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      useHash: false,
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
