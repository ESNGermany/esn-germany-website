import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

interface BoardPositionItem {
  id: string;
  Name: string;
  Position: string;
  Type: "NB" | "AB";
  order: number;
  Email: string;
  Portrait: {
    formats: {
      portrait: {
        url: string;
      }
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class BoardPositionsService {
  private url = 'https://strapi.esn-germany.de/board-positions';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  fetchNBList(): Observable<BoardPositionItem[]> {
    return this.http.get<BoardPositionItem[]>(this.url + '?Type_eq=NB&_sort=order').pipe(
      tap((_) => this.log('fetched NB board positions')),
      catchError(this.handleError<BoardPositionItem[]>('fetchNBList', []))
    );
  }

  fetchABList(): Observable<BoardPositionItem[]> {
    return this.http.get<BoardPositionItem[]>(this.url + '?Type_eq=AB&_sort=order').pipe(
      tap((_) => this.log('fetched AB board positions')),
      catchError(this.handleError<BoardPositionItem[]>('fetchABList', []))
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
    this.messageService.add(`BoardPositionsService: ${message}`);
  }
}
