import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NetworkPageComponent } from './pages/network-page/network-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { PartnersPageComponent } from './pages/partners-page/partners-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ImprintPageComponent } from './pages/imprint-page/imprint-page.component';
import { CocPageComponent } from './pages/legal/coc-page/coc-page.component';
import { EppPageComponent } from './pages/legal/epp-page/epp-page.component';
import { StatutesPageComponent } from './pages/legal/statutes-page/statutes-page.component';
import { OrdnungPageComponent } from './pages/legal/ordnung-page/ordnung-page.component';
import { KonsultationsordnungPageComponent } from './pages/legal/konsultationsordnung-page/konsultationsordnung-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationDarkComponent } from './components/navigation-dark/navigation-dark.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { MarkdownModule } from 'ngx-markdown';
import { SectionmapComponent } from './components/sectionmap/sectionmap.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavigationComponent,
    NavigationDarkComponent,
    FooterComponent,
    NetworkPageComponent,
    StudentsPageComponent,
    PartnersPageComponent,
    NewsPageComponent,
    ImprintPageComponent,
    ErrorPageComponent,
    CocPageComponent,
    EppPageComponent,
    OrdnungPageComponent,
    KonsultationsordnungPageComponent,
    StatutesPageComponent,
    SectionmapComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    TruncateModule,
    SharedModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
