import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';

import { ContentItem } from './content-item';
import { MessageService } from './message.service';

export interface IContentItem {
  data: ContentItem[];
}

@Injectable()
export class ContentService {
  private url = `${env.DIRECTUS_URL}content`;
  private homeSubject = new BehaviorSubject<ContentItem[]>([]);

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {
    this.fetchPageContent('Home');
  }

  public getPageContent(page: string): Observable<ContentItem[]> {
    switch (page) {
      case 'Home':
        return this.homeSubject.asObservable();
    }
  }

  private fetchPageContent(page: string): void {
    const params = new HttpParams()
      .set('filter[page]', page)
      .set('fields', '*.*')
      .set('sort', 'order_on_page');

    this.http
      .get<IContentItem>(`${this.url}`, {
        params,
      })
      .pipe(
        catchError(
          this.messageService.handleError<IContentItem>('fetchContentList'),
        ),
      )
      .subscribe((content: IContentItem) => {
        switch (page) {
          case 'Home':
            this.homeSubject.next(content?.data);
        }
      });
  }
}
