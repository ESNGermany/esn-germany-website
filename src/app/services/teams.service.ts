import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment as env } from 'src/environments/environment';

import { MessageService } from './message.service';
import { TeamsItem } from './teams-item';

export interface ITeamsItem {
  data: TeamsItem[];
}

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private teamsSubject = new BehaviorSubject<TeamsItem[]>([]);

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {
    this.fetchTeams();
  }

  public getTeams(): Observable<TeamsItem[]> {
    return this.teamsSubject.asObservable();
  }

  private fetchTeams(): void {
    this.http
      .get<ITeamsItem>(`${env.DIRECTUS_URL}national_teams`)
      .pipe(
        catchError(
          this.messageService.handleError<ITeamsItem>('fetchTeamsList'),
        ),
      )
      .subscribe((teams: ITeamsItem) => {
        this.teamsSubject.next(teams.data);
      });
  }
}
