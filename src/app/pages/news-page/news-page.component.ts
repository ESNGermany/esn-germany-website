import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { environment } from 'src/environments/environment';
import { FooterComponent } from '../../components/footer/footer.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgIf, NgFor, AsyncPipe, DatePipe } from '@angular/common';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { NewsItem } from 'src/app/services/news-item';

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
    AsyncPipe,
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
