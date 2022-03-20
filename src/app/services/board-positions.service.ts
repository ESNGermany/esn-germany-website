import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

export interface BoardPositionItem {
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

  private ABList: Observable<BoardPositionItem[]>;
  private NBList: Observable<BoardPositionItem[]>;
  private RCList: Observable<BoardPositionItem[]>;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.ABList = this.http
      .get<BoardPositionItem[]>(this.url + '&type=AB')
      .pipe(
        shareReplay(1),
        tap((_) => this.log('fetched ABPositions')),
        catchError(this.handleError<BoardPositionItem[]>('fetchABPositions'))
      );
    this.NBList = this.http
      .get<BoardPositionItem[]>(this.url + '&type=NB')
      .pipe(
        shareReplay(1),
        tap((_) => this.log('fetched NBPositions')),
        catchError(this.handleError<BoardPositionItem[]>('fetchNBPositions'))
      );
    this.RCList = this.http
      .get<BoardPositionItem[]>(this.url + '&type=RC')
      .pipe(
        shareReplay(1),
        tap((_) => this.log('fetched RCPositions')),
        catchError(this.handleError<BoardPositionItem[]>('fetchRCPositions'))
      );
  }

  public fetchABList(): Observable<BoardPositionItem[]> {
    return this.ABList;
  }

  public fetchNBList(): Observable<BoardPositionItem[]> {
    return this.NBList;
  }

  public fetchRCList(): Observable<BoardPositionItem[]> {
    return this.RCList;
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
