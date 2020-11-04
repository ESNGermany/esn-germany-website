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
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationDarkComponent } from './components/navigation-dark/navigation-dark.component';
import { FooterComponent } from './components/footer/footer.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { TruncateModule } from '@yellowspot/ng-truncate';

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
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    IvyCarouselModule,
    HttpClientModule,
    TruncateModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
