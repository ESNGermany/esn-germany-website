import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { NewsItem, NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'esn-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  news$: Observable<NewsItem[]>;
  private newsItemId: string;

  constructor(private newsService: NewsService) {}

  async ngOnInit() {
    this.news$ = this.newsService.fetchNewsList().pipe(shareReplay(1));
    this.setNewsItemId();
  }

  private setNewsItemId(): void {
    this.news$.subscribe((NewsItemList: NewsItem[]) => {
      for (let newsItem of NewsItemList) {
        newsItem.newsItemId = this.generateNewsItemId(newsItem.Title);
      }
    });
  }

  private generateNewsItemId(title: string): string {
    // no uppercase letters for URL
    this.newsItemId = title.toLowerCase();
    // remove all special characters
    this.newsItemId = this.newsItemId
      .split(/[&\/\\#,+()$~%.'":*-?!<>{}]/g)
      .join('');
    // remove double spaces
    this.newsItemId = this.newsItemId.split('  ').join(' ');
    // replace every space with a hyphen
    this.newsItemId = this.newsItemId.split(' ').join('-');
    // if string ends with a hyphen, remove it
    if (this.newsItemId.substring(this.newsItemId.length - 1) === '-') {
      this.newsItemId = this.newsItemId.substring(
        0,
        this.newsItemId.length - 1
      );
    }
    return this.newsItemId;
  }
}
