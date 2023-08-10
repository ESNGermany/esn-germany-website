import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {
  ILegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgIf, AsyncPipe } from '@angular/common';
import { NavigationComponent } from '../../../components/navigation/navigation.component';

@Component({
  selector: 'esn-konsultationsordnung-page',
  templateUrl: './konsultationsordnung-page.component.html',
  standalone: true,
  imports: [
    NavigationComponent,
    NgIf,
    MarkdownModule,
    FooterComponent,
    AsyncPipe,
  ],
})
export class KonsultationsordnungPageComponent implements OnInit {
  konsultationsordnungItem$: Observable<ILegalDocumentsItem> | undefined;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  async ngOnInit() {
    this.konsultationsordnungItem$ = this.legalDocumentsService
      .fetchLegalDocumentsList('?filter[title]=Konsultationsordnung')
      .pipe(
        shareReplay(1),
        map((res: any) => res.data[0]),
      );
  }
}
