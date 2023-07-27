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
  selector: 'esn-statutes-page',
  templateUrl: './statutes-page.component.html',
  standalone: true,
  imports: [
    NavigationDarkComponent,
    NgIf,
    MarkdownModule,
    FooterComponent,
    AsyncPipe,
  ],
})
export class StatutesPageComponent implements OnInit {
  statutesItem$: Observable<ILegalDocumentsItem> | undefined;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  async ngOnInit() {
    this.statutesItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('?filter[title]=Satzung')
      .pipe(
        shareReplay(1),
        map((res: any) => res.data[0]),
      );
  }
}
