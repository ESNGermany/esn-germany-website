import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

import { environment as env } from 'src/environments/environment';
import { MessageService } from './message.service';

export interface IContentItem {
  title: string;
  text: string;
  layout:
    | 'text_only'
    | 'text_above_img_below'
    | 'text_below_img_above'
    | 'text_left_img_right'
    | 'text_right_img_left';
  wrap_in_shadow_box: boolean;
  background_gray: boolean;
  page:
    | 'Home'
    | 'Our_network'
    | 'For_students'
    | 'ESNcard_partners'
    | 'Contact_us';
  order_on_page: number;
  image: string;
}

@Injectable()
export class ContentService {
  private url = `${env.DIRECTUS_URL}content`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {}

  fetchPageContent(page: string): Observable<IContentItem[]> {
    const params = new HttpParams()
      .set('filter[page]', page)
      .set('fields', '*.*')
      .set('sort', 'order_on_page');

    return this.http
      .get<IContentItem[]>(`${this.url}`, {
        params,
      })
      .pipe(
        shareReplay(1),
        map((res: any) => res.data),
        tap(() => this.log('fetched content')),
        catchError(this.handleError<IContentItem[]>('fetchContentList')),
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
    this.messageService.add(`ContentService: ${message}`);
  }
}
