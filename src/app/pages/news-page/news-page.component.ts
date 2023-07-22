import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { INewsItem, NewsService } from 'src/app/services/news.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'esn-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  news$: Observable<INewsItem[]>;
  private id: string;
  public directusImageUrl: string = environment.DIRECTUS_URL_IMAGE;
  public directusFileUrl: string = environment.DIRECTUS_URL_FILE;

  constructor(private newsService: NewsService) {}

  async ngOnInit() {
    this.news$ = this.newsService.fetchNewsList().pipe(
      shareReplay(1),
      map((res: any) => res.data)
    );
    this.setNewsItemId();
  }

  private setNewsItemId(): void {
    this.news$.subscribe((NewsItemList: INewsItem[]) => {
      for (let newsItem of NewsItemList) {
        newsItem.id = this.generateNewsItemId(newsItem.title);
      }
    });
  }

  private generateNewsItemId(title: string): string {
    // no uppercase letters for URL
    this.id = title.toLowerCase();
    // remove all special characters
    this.id = this.id.split(/[&\/\\#,+()$~%.'":*-?!<>{}]/g).join('');
    // remove double spaces
    this.id = this.id.split('  ').join(' ');
    // replace every space with a hyphen
    this.id = this.id.split(' ').join('-');
    // if string ends with a hyphen, remove it
    if (this.id.substring(this.id.length - 1) === '-') {
      this.id = this.id.substring(0, this.id.length - 1);
    }
    return this.id;
  }
}
