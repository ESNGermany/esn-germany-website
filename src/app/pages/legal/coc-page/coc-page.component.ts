import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {
  ILegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgIf, AsyncPipe } from '@angular/common';
import { ArticleComponent } from '../../../components/article/article.component';
import { NavigationDarkComponent } from '../../../components/navigation-dark/navigation-dark.component';

@Component({
    selector: 'esn-coc-page',
    templateUrl: './coc-page.component.html',
    standalone: true,
    imports: [
        NavigationDarkComponent,
        ArticleComponent,
        NgIf,
        MarkdownModule,
        FooterComponent,
        AsyncPipe,
    ],
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
