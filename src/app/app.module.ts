import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import {
  SectionmapComponent,
  SectionmapDirective,
} from './components/sectionmap/sectionmap.component';

import { SharedModule } from './shared/shared.module';
import { ExpandableComponent } from './components/expandable/expandable.component';
import { StickyNavbarComponent } from './components/sticky-navbar/sticky-navbar.component';
import { BoardPositionsService } from './services/board-positions.service';
import { LegalDocumentsService } from './services/legal-documents.service';
import { ImprintService } from './services/imprint.service';
import { MessageService } from './services/message.service';
import { NewsService } from './services/news.service';
import { PartnersService } from './services/partners.service';
import { SectionsService } from './services/sections.service';
import { TeamsService } from './services/teams.service';
import { ArticleComponent } from './components/article/article.component';

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
    SectionmapDirective,
    ExpandableComponent,
    StickyNavbarComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TruncateModule,
    SharedModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    BoardPositionsService,
    LegalDocumentsService,
    ImprintService,
    MessageService,
    NewsService,
    PartnersService,
    SectionsService,
    TeamsService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
