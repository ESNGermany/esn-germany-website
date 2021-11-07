import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

export interface PartnersItem {
  id: string;
  Name: string;
  Description: string;
  Deal: string;
  Link: string;
  Logo: {
    alternativeText: string;
    caption: string;
    formats: {
      medium: {
        url: string;
      };
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  private url = 'https://strapi.esn-germany.de/web-partner';
  private dataRequest;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.dataRequest = this.http.get<PartnersItem[]>(this.url).pipe(
      shareReplay(1),
      tap((_) => this.log('fetched partners')),
      catchError(this.handleError<PartnersItem[]>('fetchPartnersList', []))
    );
  }

  fetchPartnersList(): Observable<PartnersItem[]> {
    return this.dataRequest;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`PartnersService: ${message}`);
  }
}
