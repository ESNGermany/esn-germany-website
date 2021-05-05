import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

interface TeamsItem {
  id: string;
  Teamname: string;
  Description: string;
  Image: {
    alternativeText: string;
    formats: {
      portrait: {
        url: string;
      };
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private url = 'https://strapi.esn-germany.de/website-national-teams';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  fetchTeams(): Observable<TeamsItem[]> {
    return this.http.get<TeamsItem[]>(this.url).pipe(
      tap((_) => this.log('fetched Teams')),
      catchError(this.handleError<TeamsItem[]>('fetchTeams'))
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
    this.messageService.add(`BoardPositionService: ${message}`);
  }
}
