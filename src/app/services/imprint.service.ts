import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { environment as env } from 'src/environments/environment';

export interface IImprintItem {
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImprintService {
  private url = `${env.DIRECTUS_URL}imprint`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  public fetchImprint(): Observable<IImprintItem> {
    return this.http.get<IImprintItem>(this.url).pipe(
      shareReplay(1),
      tap((_) => this.log('fetched imprint')),
      catchError(this.handleError<IImprintItem>('fetchImprint'))
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
    this.messageService.add(`ImprintService: ${message}`);
  }
}
