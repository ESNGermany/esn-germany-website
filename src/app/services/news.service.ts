import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment as env } from 'src/environments/environment';

import { MessageService } from './message.service';
import { NewsItem } from './news-item';

export interface INewsItem {
  data: NewsItem[];
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private url = `${env.DIRECTUS_URL}news`;
  private newsSubject = new BehaviorSubject<NewsItem[]>([]);
  private id: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {
    this.fetchNews();
  }

  public getNews(): Observable<NewsItem[]> {
    return this.newsSubject.asObservable();
  }

  private fetchNews(): void {
    const params = new HttpParams().set('sort', '-published');

    this.http
      .get<INewsItem>(this.url, { params })
      .pipe(catchError(this.messageService.handleError<INewsItem>('fetchNews')))
      .subscribe((newsItem: INewsItem) => {
        const news = newsItem.data.map((item: NewsItem) => {
          return {
            ...item,
            id: this.generateNewsItemId(item.title),
          };
        });
        this.newsSubject.next(news);
      });
  }

  private generateNewsItemId(title: string): string {
    // no uppercase letters for URL
    this.id = title.toLowerCase();
    // remove all special characters
    this.id = this.id.split(/[&/\\#,+()$~%.'":*-?!<>{}]/g).join('');
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
