import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

interface BoardPositionItem {
  id: string;
  name: string;
  position: string;
  email: string;
  position_description: string;
  Portrait: [
    {
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
  private url = 'https://strapi.esn-germany.de/web-board-member?_sort=order';
  private fullUrl: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  fetchABList(): Observable<BoardPositionItem[]> {
    this.fullUrl = this.url + '&type=AB';
    return this.http.get<BoardPositionItem[]>(this.fullUrl).pipe(
      tap((_) => this.log('fetched ABPositions')),
      catchError(this.handleError<BoardPositionItem[]>('fetchABPositions'))
    );
  }

  fetchNBList(): Observable<BoardPositionItem[]> {
    this.fullUrl = this.url + '&type=NB';
    return this.http.get<BoardPositionItem[]>(this.fullUrl).pipe(
      tap((_) => this.log('fetched NBPositions')),
      catchError(this.handleError<BoardPositionItem[]>('fetchNBPositions'))
    );
  }

  fetchRCList(): Observable<BoardPositionItem[]> {
    this.fullUrl = this.url + '&type=RC';
    return this.http.get<BoardPositionItem[]>(this.fullUrl).pipe(
      tap((_) => this.log('fetched RCPositions')),
      catchError(this.handleError<BoardPositionItem[]>('fetchRCPositions'))
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
