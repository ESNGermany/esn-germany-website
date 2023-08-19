import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment as env } from 'src/environments/environment';

import { MessageService } from './message.service';
import { PartnersItem } from './partners-item';

export interface IPartnersItem {
  data: PartnersItem[];
}

@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  private url = `${env.DIRECTUS_URL}partners`;
  private partnersSubject = new BehaviorSubject<PartnersItem[]>([]);
  private buttonText = 'Learn More ↓';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {
    this.fetchPartners();
  }

  public getPartners(): Observable<PartnersItem[]> {
    return this.partnersSubject.asObservable();
  }

  private fetchPartners(): void {
    this.http
      .get<IPartnersItem>(this.url)
      .pipe(
        catchError(
          this.messageService.handleError<IPartnersItem>('fetchPartnersList'),
        ),
      )
      .subscribe((partners: IPartnersItem) => {
        const partnersItems = partners?.data.map((item: PartnersItem) => {
          return {
            ...item,
            buttonText: this.buttonText,
          };
        });
        this.partnersSubject.next(partnersItems);
      });
  }
}
