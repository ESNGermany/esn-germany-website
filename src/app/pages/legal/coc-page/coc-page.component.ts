import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { map, Observable, shareReplay } from 'rxjs';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'app-coc-page',
  templateUrl: './coc-page.component.html',
})
export class CocPageComponent implements OnInit {
  cocItem$: Observable<LegalDocumentsItem> | undefined;

  constructor(
    private title: Title,
    private legalDocumentsService: LegalDocumentsService
  ) {
    this.title.setTitle('Code of Conduct - ESN Germany');
  }

  async ngOnInit() {
    this.cocItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('4')
      .pipe(
        shareReplay(1),
        map((res: LegalDocumentsItem) => res)
      );
  }
}
