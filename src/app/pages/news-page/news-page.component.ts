import { NgIf, NgFor, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { NewsService } from 'src/app/services/news.service';
import { NewsItem } from 'src/app/services/news-item';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'esn-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
  standalone: true,
  imports: [
    NavigationComponent,
    NgIf,
    NgFor,
    MarkdownModule,
    FooterComponent,
    DatePipe,
  ],
})
export class NewsPageComponent implements OnInit {
  public news: NewsItem[];
  public directusImageUrl: string = environment.DIRECTUS_URL_IMAGE;
  public directusFileUrl: string = environment.DIRECTUS_URL_FILE;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe({
      next: (news?: NewsItem[]) => {
        this.news = news;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
