import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { ArticleComponent } from 'src/app/components/article/article.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { LegalDocumentsService } from 'src/app/services/legal-documents.service';
import { LegalDocument } from 'src/app/services/legal-document-item';

@Component({
  selector: 'esn-coc-page',
  templateUrl: './coc-page.component.html',
  standalone: true,
  imports: [
    NavigationComponent,
    ArticleComponent,
    NgIf,
    MarkdownModule,
    FooterComponent,
  ],
})
export class CocPageComponent implements OnInit {
  cocItem: LegalDocument;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  ngOnInit(): void {
    this.legalDocumentsService
      .getLegalDocument('Verhaltenskodex / Code of Conduct')
      .subscribe({
        next: (document?: LegalDocument) => {
          this.cocItem = document;
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}
