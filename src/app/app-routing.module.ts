import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NetworkPageComponent } from './pages/network-page/network-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { PartnersPageComponent } from './pages/partners-page/partners-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ImprintPageComponent } from './pages/imprint-page/imprint-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

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
  {
    path: 'news',
    component: NewsPageComponent,
  },
  {
    path: 'imprint',
    component: ImprintPageComponent,
  },
  // {
  //   path: 'imprint\#CoC',
  //   component: ImprintPageComponent,
  // },
  // {
  //   path: 'imprint\#privacy-policy',
  //   component: ImprintPageComponent,
  // },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      title: 'Oopsie - ESN Germany e.V.',
    },
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'error',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      useHash: false,
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
