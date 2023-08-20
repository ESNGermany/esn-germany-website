import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MarkdownModule } from 'ngx-markdown';
import { TruncateModule } from '@yellowspot/ng-truncate';

import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';
import { BoardPositionsService } from './app/services/board-positions.service';
import { ContentService } from './app/services/content.service';
import { GeneralInformationService } from './app/services/general-information.service';
import { LegalDocumentsService } from './app/services/legal-documents.service';
import { LegalNoticeService } from './app/services/legal-notice.service';
import { MessageService } from './app/services/message.service';
import { NewsService } from './app/services/news.service';
import { PartnersService } from './app/services/partners.service';
import { SectionsService } from './app/services/sections.service';
import { TeamsService } from './app/services/teams.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        TruncateModule,
        MarkdownModule.forRoot(),
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000',
        }),
      ),
      BoardPositionsService,
      ContentService,
      GeneralInformationService,
      LegalDocumentsService,
      LegalNoticeService,
      MessageService,
      NewsService,
      PartnersService,
      SectionsService,
      TeamsService,
      provideAnimations(),
      provideHttpClient(withInterceptorsFromDi()),
      provideRouter(routes),
    ],
  }).catch((err) => console.error(err));
});
