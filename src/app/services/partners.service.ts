import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { environment as env } from 'src/environments/environment';

export interface IPartnersItem {
  name: string;
  logo: string;
  link: string;
  description: string;
  buttontext: string;
  show: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  private url = `${env.DIRECTUS_URL}partners`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  public fetchPartnersList(): Observable<IPartnersItem[]> {
    return this.http.get<IPartnersItem[]>(this.url).pipe(
      shareReplay(1),
      tap(() => this.log('fetched partners')),
      catchError(this.handleError<IPartnersItem[]>('fetchPartnersList', []))
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
