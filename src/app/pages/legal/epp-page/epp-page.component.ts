import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {
  ILegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'esn-epp-page',
  templateUrl: './epp-page.component.html',
})
export class EppPageComponent implements OnInit {
  eppItem$: Observable<ILegalDocumentsItem> | undefined;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  async ngOnInit() {
    this.eppItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('?filter[title]=EPP')
      .pipe(
        shareReplay(1),
        map((res: any) => res.data[0])
      );
  }
}
