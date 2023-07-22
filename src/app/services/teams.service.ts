import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { environment as env } from 'src/environments/environment';

export interface ITeamsItem {
  image: string;
  teamname: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private url = `${env.DIRECTUS_URL}national_teams`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  public fetchTeam(): Observable<ITeamsItem[]> {
    return this.http.get<ITeamsItem[]>(this.url).pipe(
      shareReplay(1),
      tap((_) => this.log('fetched Team')),
      catchError(this.handleError<ITeamsItem[]>('fetchTeamsList', []))
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
