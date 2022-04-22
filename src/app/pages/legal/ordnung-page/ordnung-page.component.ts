import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { map, Observable, shareReplay } from 'rxjs';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'app-ordnung-page',
  templateUrl: './ordnung-page.component.html',
})
export class OrdnungPageComponent implements OnInit {
  ordnungItem$: Observable<LegalDocumentsItem> | undefined;

  constructor(
    private title: Title,
    private legalDocumentsService: LegalDocumentsService
  ) {
    this.title.setTitle('Ordnung - ESN Germany');
  }

  async ngOnInit() {
    this.ordnungItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('2')
      .pipe(
        shareReplay(1),
        map((res: LegalDocumentsItem) => res)
      );
  }
}
