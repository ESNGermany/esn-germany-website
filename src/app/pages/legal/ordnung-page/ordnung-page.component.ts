import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'esn-ordnung-page',
  templateUrl: './ordnung-page.component.html',
})
export class OrdnungPageComponent implements OnInit {
  ordnungItem$: Observable<LegalDocumentsItem> | undefined;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  async ngOnInit() {
    this.ordnungItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('2')
      .pipe(
        shareReplay(1),
        map((res: LegalDocumentsItem) => res)
      );
  }
}
