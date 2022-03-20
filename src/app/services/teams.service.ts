import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

export interface TeamsItem {
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
  private dataRequest;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.dataRequest = this.http.get<TeamsItem[]>(this.url).pipe(
      shareReplay(1),
      tap((_) => this.log('fetched Team')),
      catchError(this.handleError<TeamsItem[]>('fetchTeamsList', []))
    );
  }

  public fetchTeam(): Observable<TeamsItem[]> {
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
    this.messageService.add(`BoardPositionService: ${message}`);
  }
}
