import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'app-epp-page',
  templateUrl: './epp-page.component.html',
})
export class EppPageComponent implements OnInit {
  eppItem$: Observable<LegalDocumentsItem> | undefined;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  async ngOnInit() {
    this.eppItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('3')
      .pipe(
        shareReplay(1),
        map((res: LegalDocumentsItem) => res)
      );
  }
}
