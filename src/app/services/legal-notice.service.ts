import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment as env } from 'src/environments/environment';

import { LegalNoticeItem } from './legal-notice-item';
import { MessageService } from './message.service';

export interface ILegalNoticeItem {
  data: LegalNoticeItem;
}

@Injectable({
  providedIn: 'root',
})
export class LegalNoticeService {
  private url = `${env.DIRECTUS_URL}imprint`;
  private legalNoticeSubject = new BehaviorSubject<LegalNoticeItem | undefined>(
    undefined,
  );

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {
    this.fetchLegalNotice();
  }

  public getLegalNotice(): Observable<LegalNoticeItem> {
    return this.legalNoticeSubject.asObservable();
  }

  private fetchLegalNotice(): void {
    this.http
      .get<ILegalNoticeItem>(this.url)
      .pipe(
        catchError(
          this.messageService.handleError<ILegalNoticeItem>('fetchLegalNotice'),
        ),
      )
      .subscribe((legalNotice: ILegalNoticeItem) => {
        this.legalNoticeSubject.next(legalNotice?.data);
      });
  }
}
