import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public messages: string[] = [];

  public add(message: string) {
    this.messages.push(message);
  }

  public clear() {
    this.messages = [];
  }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  public log(message: string) {
    this.add(`BoardPositionService: ${message}`);
  }
}
