import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { environment as env } from 'src/environments/environment';

export interface IBoardPositionItem {
  portrait: string;
  name: string;
  position_description: string;
  position: string;
  order: number;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class BoardPositionsService {
  private url = `${env.DIRECTUS_URL}board_members`;
  private params = new HttpParams().set('sort', 'order');

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {}

  public fetchABList(): Observable<IBoardPositionItem[]> {
    // audit board
    return this.http
      .get<IBoardPositionItem[]>(this.url + '?filter[type]=AB', {
        params: this.params,
      })
      .pipe(
        shareReplay(1),
        tap(() => this.log('fetched ABPositions')),
        catchError(this.handleError<IBoardPositionItem[]>('fetchABPositions')),
      );
  }

  public fetchNBList(): Observable<IBoardPositionItem[]> {
    // national board
    return this.http
      .get<IBoardPositionItem[]>(this.url + '?filter[type]=NB', {
        params: this.params,
      })
      .pipe(
        shareReplay(1),
        tap(() => this.log('fetched NBPositions')),
        catchError(this.handleError<IBoardPositionItem[]>('fetchNBPositions')),
      );
  }

  public fetchRCList(): Observable<IBoardPositionItem[]> {
    // regional coordinators
    return this.http
      .get<IBoardPositionItem[]>(this.url + '?filter[type]=RC', {
        params: this.params,
      })
      .pipe(
        shareReplay(1),
        tap(() => this.log('fetched RCPositions')),
        catchError(this.handleError<IBoardPositionItem[]>('fetchRCPositions')),
      );
  }

  public fetchBSList(): Observable<IBoardPositionItem[]> {
    // board supporters
    return this.http
      .get<IBoardPositionItem[]>(this.url + '?filter[type]=BS', {
        params: this.params,
      })
      .pipe(
        shareReplay(1),
        tap(() => this.log('fetched BSPositions')),
        catchError(this.handleError<IBoardPositionItem[]>('fetchBSPositions')),
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
