import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { map, Observable, shareReplay } from 'rxjs';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'app-konsultationsordnung-page',
  templateUrl: './konsultationsordnung-page.component.html',
})
export class KonsultationsordnungPageComponent implements OnInit {
  konsultationsordnungItem$: Observable<LegalDocumentsItem> | undefined;

  constructor(
    private title: Title,
    private legalDocumentsService: LegalDocumentsService
  ) {
    this.title.setTitle('Konsultationsordnung - ESN Germany');
  }

  async ngOnInit() {
    this.konsultationsordnungItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('5')
      .pipe(
        shareReplay(1),
        map((res: LegalDocumentsItem) => res)
      );
  }
}
