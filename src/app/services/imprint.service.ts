import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

export interface ImprintItem {
  id: string;
  Content: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImprintService {
  private url = 'https://strapi.esn-germany.de/website-imprints';

  private dataRequest;
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.dataRequest = this.http.get<ImprintItem[]>(this.url).pipe(
      shareReplay(1),
      tap((_) => this.log('fetched imprint')),
      catchError(this.handleError<ImprintItem[]>('fetchImprintList', []))
    );
  }

  public fetchImprintList(): Observable<ImprintItem[]> {
    return this.dataRequest;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`ImprintService: ${message}`);
  }
}
