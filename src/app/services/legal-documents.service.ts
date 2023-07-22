import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { environment as env } from 'src/environments/environment';

export interface ILegalDocumentsItem {
  markdowntext: string;
  title: string;
  pdf: string;
}

@Injectable({
  providedIn: 'root',
})
export class LegalDocumentsService {
  /**
   * Satzung
   * Ordnung
   * EPP
   * Code of Conduct
   * Konsultationsordnung
   */

  private url = `${env.DIRECTUS_URL}legal_documents`;
  private fullUrl: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  public fetchLegalDocumentsList(id: string): Observable<ILegalDocumentsItem> {
    this.fullUrl = this.url + id;
    return this.http.get<ILegalDocumentsItem>(this.fullUrl).pipe(
      tap((_) => this.log('fetched LegalDocument')),
      catchError(this.handleError<ILegalDocumentsItem>('fetchLegalDocument'))
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
    this.messageService.add(`LegalDocumentsService: ${message}`);
  }
}
