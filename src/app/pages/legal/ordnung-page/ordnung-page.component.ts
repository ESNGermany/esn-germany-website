import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {
  ILegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'esn-ordnung-page',
  templateUrl: './ordnung-page.component.html',
})
export class OrdnungPageComponent implements OnInit {
  ordnungItem$: Observable<ILegalDocumentsItem> | undefined;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  async ngOnInit() {
    this.ordnungItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('?filter[title]=Ordnung')
      .pipe(
        shareReplay(1),
        map((res: any) => res.data[0])
      );
  }
}
