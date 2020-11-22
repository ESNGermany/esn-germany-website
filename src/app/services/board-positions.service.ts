import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

interface BoardPositionItem {
  id: string;
  Name: string;
  Position: string;
  Email: string;
  Portrait: [
    {
      alternativeText: string;
      formats: {
        portrait: {
          url: string;
        };
      };
    }
  ];
}

@Injectable({
  providedIn: 'root',
})
export class BoardPositionsService {
  private url =
    'https://strapi.esn-germany.de/board-positions?_sort=order&Type=';
  private fullUrl: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  fetchABPositionList(): Observable<BoardPositionItem[]> {
    this.fullUrl = this.url + 'AB';
    return this.http.get<BoardPositionItem[]>(this.fullUrl).pipe(
      tap((_) => this.log('fetched ABPositions')),
      catchError(this.handleError<BoardPositionItem[]>('fetchABPositions'))
    );
  }

  fetchNBPositionList(): Observable<BoardPositionItem[]> {
    this.fullUrl = this.url + 'NB';
    return this.http.get<BoardPositionItem[]>(this.fullUrl).pipe(
      tap((_) => this.log('fetched NBPositions')),
      catchError(this.handleError<BoardPositionItem[]>('fetchNBPositions'))
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
