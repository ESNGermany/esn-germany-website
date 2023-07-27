import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { environment as env } from 'src/environments/environment';

export interface ISectionItem {
  name: string;
  city: string;
  website: string;
  email: string;
  region: 'north' | 'west' | 'east' | 'southwest' | 'southeast';
}

@Injectable({
  providedIn: 'root',
})
export class SectionsService {
  private url = `${env.DIRECTUS_URL}section_map`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {}

  public fetchSectionList(): Observable<ISectionItem[]> {
    return this.http.get<ISectionItem[]>(this.url).pipe(
      shareReplay(1),
      tap(() => this.log('fetched sections')),
      catchError(this.handleError<ISectionItem[]>('fetchSections', [])),
    );
  }

  public fetchSectionsNorthList(): Observable<ISectionItem[]> {
    return this.http
      .get<ISectionItem[]>(this.url + '?filter[region]=north')
      .pipe(
        shareReplay(1),
        tap(() => this.log('fetched north sections')),
        catchError(
          this.handleError<ISectionItem[]>('fetchEastSectionList', []),
        ),
      );
  }

  public fetchSectionsEastList(): Observable<ISectionItem[]> {
    return this.http
      .get<ISectionItem[]>(this.url + '?filter[region]=east')
      .pipe(
        shareReplay(1),
        tap(() => this.log('fetched east sections')),
        catchError(
          this.handleError<ISectionItem[]>('fetchEastSectionList', []),
        ),
      );
  }

  public fetchSectionsWestList(): Observable<ISectionItem[]> {
    return this.http
      .get<ISectionItem[]>(this.url + '?filter[region]=west')
      .pipe(
        shareReplay(1),
        tap(() => this.log('fetched west sections')),
        catchError(
          this.handleError<ISectionItem[]>('fetchWestSectionList', []),
        ),
      );
  }

  public fetchSectionsSouthWestList(): Observable<ISectionItem[]> {
    return this.http
      .get<ISectionItem[]>(this.url + '?filter[region]=southwest')
      .pipe(
        shareReplay(1),
        tap(() => this.log('fetched south west sections')),
        catchError(
          this.handleError<ISectionItem[]>('fetchSouthWestSectionList', []),
        ),
      );
  }

  public fetchSectionsSouthEastList(): Observable<ISectionItem[]> {
    return this.http
      .get<ISectionItem[]>(this.url + '?filter[region]=southeast')
      .pipe(
        shareReplay(1),
        tap(() => this.log('fetched south east sections')),
        catchError(
          this.handleError<ISectionItem[]>('fetchSouthEastSectionList', []),
        ),
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
    this.messageService.add(`SectionsService: ${message}`);
  }
}
