import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

export interface SectionItem {
  id: string;
  name: string;
  city: string;
  email: string;
  website: string;
  region: 'North' | 'West' | 'East' | 'SouthWest' | 'SouthEast';
}

@Injectable({
  providedIn: 'root',
})
export class SectionsService {
  private url = 'https://strapi.esn-germany.de/web-section';
  private sectionList;
  private northList;
  private eastList;
  private westList;
  private southWestList;
  private southEastList;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.sectionList = this.http.get<SectionItem[]>(this.url).pipe(
      shareReplay(1),
      tap((_) => this.log('fetched sections')),
      catchError(this.handleError<SectionItem[]>('fetchSections', []))
    );
    this.northList = this.http
      .get<SectionItem[]>(this.url + '?region_eq=North')
      .pipe(
        shareReplay(1),
        tap((_) => this.log('fetched north sections')),
        catchError(this.handleError<SectionItem[]>('fetchEastSectionList', []))
      );
    this.eastList = this.http
      .get<SectionItem[]>(this.url + '?region_eq=East')
      .pipe(
        shareReplay(1),
        tap((_) => this.log('fetched east sections')),
        catchError(this.handleError<SectionItem[]>('fetchEastSectionList', []))
      );
    this.westList = this.http
      .get<SectionItem[]>(this.url + '?region_eq=West')
      .pipe(
        shareReplay(1),
        tap((_) => this.log('fetched west sections')),
        catchError(this.handleError<SectionItem[]>('fetchWestSectionList', []))
      );
    this.southWestList = this.http
      .get<SectionItem[]>(this.url + '?region_eq=SouthWest')
      .pipe(
        shareReplay(1),
        tap((_) => this.log('fetched south west sections')),
        catchError(
          this.handleError<SectionItem[]>('fetchSouthWestSectionList', [])
        )
      );
    this.southEastList = this.http
      .get<SectionItem[]>(this.url + '?region_eq=SouthEast')
      .pipe(
        shareReplay(1),
        tap((_) => this.log('fetched south east sections')),
        catchError(
          this.handleError<SectionItem[]>('fetchSouthEastSectionList', [])
        )
      );
  }

  fetchSectionList(): Observable<SectionItem[]> {
    return this.sectionList;
  }

  fetchSectionsNorthList(): Observable<SectionItem[]> {
    return this.northList;
  }

  fetchSectionsEastList(): Observable<SectionItem[]> {
    return this.eastList;
  }

  fetchSectionsWestList(): Observable<SectionItem[]> {
    return this.westList;
  }

  fetchSectionsSouthWestList(): Observable<SectionItem[]> {
    return this.southWestList;
  }

  fetchSectionsSouthEastList(): Observable<SectionItem[]> {
    return this.southEastList;
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
