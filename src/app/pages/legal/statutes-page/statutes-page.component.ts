import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {
  ILegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'esn-statutes-page',
  templateUrl: './statutes-page.component.html',
})
export class StatutesPageComponent implements OnInit {
  statutesItem$: Observable<ILegalDocumentsItem> | undefined;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  async ngOnInit() {
    this.statutesItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('?filter[title]=Satzung')
      .pipe(
        shareReplay(1),
        map((res: any) => res.data[0])
      );
  }
}
