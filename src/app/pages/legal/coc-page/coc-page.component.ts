import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {
  ILegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'esn-coc-page',
  templateUrl: './coc-page.component.html',
})
export class CocPageComponent implements OnInit {
  cocItem$: Observable<ILegalDocumentsItem> | undefined;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  async ngOnInit() {
    this.cocItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('?filter[title]=Verhaltenskodex / Code of Conduct')
      .pipe(
        shareReplay(1),
        map((res: any) => res.data[0])
      );
  }
}
