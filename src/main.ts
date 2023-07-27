import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MarkdownModule } from 'ngx-markdown';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ContentService } from './app/services/content.service';
import { GeneralInformationService } from './app/services/general-information.service';
import { TeamsService } from './app/services/teams.service';
import { SectionsService } from './app/services/sections.service';
import { PartnersService } from './app/services/partners.service';
import { NewsService } from './app/services/news.service';
import { MessageService } from './app/services/message.service';
import { ImprintService } from './app/services/imprint.service';
import { LegalDocumentsService } from './app/services/legal-documents.service';
import { BoardPositionsService } from './app/services/board-positions.service';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule.withServerTransition({ appId: 'serverApp' }), TruncateModule, MarkdownModule.forRoot(), ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })),
        BoardPositionsService,
        LegalDocumentsService,
        ImprintService,
        MessageService,
        NewsService,
        PartnersService,
        SectionsService,
        TeamsService,
        GeneralInformationService,
        ContentService,
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes)
    ]
})
  .catch(err => console.error(err));
});
