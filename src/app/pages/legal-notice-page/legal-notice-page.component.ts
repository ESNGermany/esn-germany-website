import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { ArticleComponent } from 'src/app/components/article/article.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { LegalNoticeService } from 'src/app/services/legal-notice.service';
import { LegalNoticeItem } from 'src/app/services/legal-notice-item';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';

@Component({
  selector: 'esn-legal-notice-page',
  templateUrl: './legal-notice-page.component.html',
  standalone: true,
  imports: [
    NavigationComponent,
    ArticleComponent,
    NgIf,
    MarkdownModule,
    FooterComponent,
  ],
})
export class LegalNoticePageComponent implements OnInit {
  legalNoticeItem: LegalNoticeItem;

  constructor(private legalNoticeService: LegalNoticeService) {}

  ngOnInit(): void {
    this.legalNoticeService.getLegalNotice().subscribe({
      next: (legalNoticeItem: LegalNoticeItem) => {
        this.legalNoticeItem = legalNoticeItem;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
