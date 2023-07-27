import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {
  ILegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgIf, AsyncPipe } from '@angular/common';
import { NavigationDarkComponent } from '../../../components/navigation-dark/navigation-dark.component';

@Component({
  selector: 'esn-ordnung-page',
  templateUrl: './ordnung-page.component.html',
  standalone: true,
  imports: [
    NavigationDarkComponent,
    NgIf,
    MarkdownModule,
    FooterComponent,
    AsyncPipe,
  ],
})
export class OrdnungPageComponent implements OnInit {
  ordnungItem$: Observable<ILegalDocumentsItem> | undefined;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  async ngOnInit() {
    this.ordnungItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('?filter[title]=Ordnung')
      .pipe(
        shareReplay(1),
        map((res: any) => res.data[0]),
      );
  }
}
