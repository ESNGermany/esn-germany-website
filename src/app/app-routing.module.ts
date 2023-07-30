import { Route } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NetworkPageComponent } from './pages/network-page/network-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { PartnersPageComponent } from './pages/partners-page/partners-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ImprintPageComponent } from './pages/imprint-page/imprint-page.component';
import { CocPageComponent } from './pages/legal/coc-page/coc-page.component';
import { EppPageComponent } from './pages/legal/epp-page/epp-page.component';
import { StatutesPageComponent } from './pages/legal/statutes-page/statutes-page.component';
import { OrdnungPageComponent } from './pages/legal/ordnung-page/ordnung-page.component';
import { KonsultationsordnungPageComponent } from './pages/legal/konsultationsordnung-page/konsultationsordnung-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SectionsPageComponent } from './pages/sections-page/sections-page.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    title: 'ESN Germany',
    component: LandingPageComponent,
  },
  {
    path: 'our-network',
    title: 'Our Network - ESN Germany',
    component: NetworkPageComponent,
  },
  {
    path: 'for-students',
    title: 'For Students - ESN Germany',
    component: StudentsPageComponent,
  },
  {
    path: 'for-partners',
    title: 'ESNcard & Partners - ESN Germany',
    component: PartnersPageComponent,
  },
  {
    path: 'news',
    title: 'News - ESN Germany',
    component: NewsPageComponent,
  },
  {
    path: 'imprint',
    title: 'Imprint - ESN Germany',
    component: ImprintPageComponent,
  },
  {
    path: 'contact-us',
    title: 'Contact Us - ESN Germany',
    component: ContactPageComponent,
  },
  {
    path: 'coc',
    title: 'Code of Conduct - ESN Germany',
    component: CocPageComponent,
  },
  {
    path: 'epp',
    title: 'Event Policy Paper - ESN Germany',
    component: EppPageComponent,
  },
  {
    path: 'statutes',
    title: 'Statutes - ESN Germany',
    component: StatutesPageComponent,
  },
  {
    path: 'standing-orders',
    title: 'Ordnung - ESN Germany',
    component: OrdnungPageComponent,
  },
  {
    path: 'consultation-order',
    title: 'Konsultationsordnung - ESN Germany',
    component: KonsultationsordnungPageComponent,
  },
  {
    path: 'sections',
    title: 'Sections - ESN Germany',
    component: SectionsPageComponent,
  },
  {
    path: 'error',
    title: 'Oopsie... - ESN Germany',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'error',
  },
];
