import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

interface PartnersItem {
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

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  fetchPartnersList(): Observable<PartnersItem[]> {
    return this.http.get<PartnersItem[]>(this.url).pipe(
      tap((_) => this.log('fetched partners')),
      catchError(this.handleError<PartnersItem[]>('fetchPartnersList', []))
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
    this.messageService.add(`PartnersService: ${message}`);
  }
}
