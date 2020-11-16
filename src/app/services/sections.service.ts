import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

interface SectionItem {
  id: string;
  Name: string;
  City: string;
  email: string;
  website: string;
  Region: 'North' | 'West' | 'East' | 'SouthWest' | 'SouthEast';
}

@Injectable({
  providedIn: 'root',
})
export class SectionsService {
  private url = 'https://strapi.esn-germany.de/sections';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  fetchSectionList(): Observable<SectionItem[]> {
    return this.http.get<SectionItem[]>(this.url).pipe(
      tap((_) => this.log('fetched sections')),
      catchError(this.handleError<SectionItem[]>('fetchSectionList', []))
    );
  }

  fetchSectionsNorthList(): Observable<SectionItem[]> {
    return this.http.get<SectionItem[]>(this.url + '?Region_eq=North').pipe(
      tap((_) => this.log('fetched north sections')),
      catchError(this.handleError<SectionItem[]>('fetchEastSectionList', []))
    );
  }

  fetchSectionsEastList(): Observable<SectionItem[]> {
    return this.http.get<SectionItem[]>(this.url + '?Region_eq=East').pipe(
      tap((_) => this.log('fetched east sections')),
      catchError(this.handleError<SectionItem[]>('fetchEastSectionList', []))
    );
  }

  fetchSectionsWestList(): Observable<SectionItem[]> {
    return this.http.get<SectionItem[]>(this.url + '?Region_eq=West').pipe(
      tap((_) => this.log('fetched west sections')),
      catchError(this.handleError<SectionItem[]>('fetchWestSectionList', []))
    );
  }

  fetchSectionsSouthWestList(): Observable<SectionItem[]> {
    return this.http.get<SectionItem[]>(this.url + '?Region_eq=SouthWest').pipe(
      tap((_) => this.log('fetched south west sections')),
      catchError(
        this.handleError<SectionItem[]>('fetchSouthWestSectionList', [])
      )
    );
  }

  fetchSectionsSouthEastList(): Observable<SectionItem[]> {
    return this.http.get<SectionItem[]>(this.url + '?Region_eq=SouthEast').pipe(
      tap((_) => this.log('fetched south east sections')),
      catchError(
        this.handleError<SectionItem[]>('fetchSouthEastSectionList', [])
      )
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
