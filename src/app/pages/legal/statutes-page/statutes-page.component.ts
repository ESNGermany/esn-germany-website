import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  constructor(
    private title: Title,
    private legalDocumentsService: LegalDocumentsService
  ) {
    this.title.setTitle('Statutes - ESN Germany');
  }

  async ngOnInit() {
    this.statutesItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('1')
      .pipe(
        shareReplay(1),
        map((res: LegalDocumentsItem) => res)
      );
  }
}
