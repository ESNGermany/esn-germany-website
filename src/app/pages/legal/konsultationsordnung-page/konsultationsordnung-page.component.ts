import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'esn-konsultationsordnung-page',
  templateUrl: './konsultationsordnung-page.component.html',
})
export class KonsultationsordnungPageComponent implements OnInit {
  konsultationsordnungItem$: Observable<LegalDocumentsItem> | undefined;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  async ngOnInit() {
    this.konsultationsordnungItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('5')
      .pipe(
        shareReplay(1),
        map((res: LegalDocumentsItem) => res)
      );
  }
}
