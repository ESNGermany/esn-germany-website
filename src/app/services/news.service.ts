import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

interface NewsItem {
  id: string;
  Title: string;
  Shorttext: string;
  Image: {
    id: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      medium: {
        url: string;
      };
    };
  };
  Attachments: {
    name: string;
    url: string;
  };
  Author: string;
  Text: string;
  updated_at: Date;
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private url =
    'https://strapi.esn-germany.de/web-news-item?_sort=updated_at:DESC';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  fetchNewsList(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(this.url).pipe(
      tap((_) => this.log('fetched news')),
      catchError(this.handleError<NewsItem[]>('fetchNewsList', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`NewsService: ${message}`);
  }
}
