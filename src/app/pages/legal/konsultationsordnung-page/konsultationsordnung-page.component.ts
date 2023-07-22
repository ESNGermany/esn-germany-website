import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {
  ILegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'esn-konsultationsordnung-page',
  templateUrl: './konsultationsordnung-page.component.html',
})
export class KonsultationsordnungPageComponent implements OnInit {
  konsultationsordnungItem$: Observable<ILegalDocumentsItem> | undefined;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  async ngOnInit() {
    this.konsultationsordnungItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('?filter[title]=Konsultationsordnung')
      .pipe(
        shareReplay(1),
        map((res: any) => res.data[0])
      );
  }
}
