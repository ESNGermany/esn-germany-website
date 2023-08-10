import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {
  ILegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgIf, AsyncPipe } from '@angular/common';
import { NavigationComponent } from '../../../components/navigation/navigation.component';

@Component({
  selector: 'esn-epp-page',
  templateUrl: './epp-page.component.html',
  standalone: true,
  imports: [
    NavigationComponent,
    NgIf,
    MarkdownModule,
    FooterComponent,
    AsyncPipe,
  ],
})
export class EppPageComponent implements OnInit {
  eppItem$: Observable<ILegalDocumentsItem> | undefined;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  async ngOnInit() {
    this.eppItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('?filter[title]=EPP')
      .pipe(
        shareReplay(1),
        map((res: any) => res.data[0]),
      );
  }
}
