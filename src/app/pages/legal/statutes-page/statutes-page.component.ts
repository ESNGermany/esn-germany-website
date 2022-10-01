import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'app-statutes-page',
  templateUrl: './statutes-page.component.html',
})
export class StatutesPageComponent implements OnInit {
  statutesItem$: Observable<LegalDocumentsItem> | undefined;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  async ngOnInit() {
    this.statutesItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('1')
      .pipe(
        shareReplay(1),
        map((res: LegalDocumentsItem) => res)
      );
  }
}
