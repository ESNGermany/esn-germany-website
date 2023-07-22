import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { environment as env} from 'src/environments/environment';

export interface INewsItem {
  id: string;
  title: string;
  text: string;
  image: string;
  attachment: string;
  author: string;
  published: Date;
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private url =
    `${env.DIRECTUS_URL}news`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  public fetchNewsList(): Observable<INewsItem[]> {
    const params = new HttpParams()
      .set('sort', '-published');

    return this.http.get<INewsItem[]>(this.url, { params }).pipe(
      shareReplay(1),
      tap((_) => this.log('fetched news')),
      catchError(this.handleError<INewsItem[]>('fetchNewsList', []))
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
