import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

interface LegalDocumentsItem {
  id: string;
  UpdateDate: string;
  MarkdownText: string;
  Title: string;
}

@Injectable({
  providedIn: 'root',
})
export class LegalDocumentsService {
  /**
   * 1: Satzung
   * 2: Ordnung
   * 3: Event Policy Paper
   * 4: Code of Conduct
   * 5: Konsultationsordnung
   */

  private url = 'https://strapi.esn-germany.de/legal-documents/';
  private fullUrl: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  fetchLegalDocumentsList(id: string): Observable<LegalDocumentsItem> {
    this.fullUrl = this.url + id;
    console.log(this.fullUrl);
    return this.http.get<LegalDocumentsItem>(this.fullUrl).pipe(
      tap((_) => this.log('fetched LegalDocuments')),
      catchError(this.handleError<LegalDocumentsItem>('fetchLegalDocuments'))
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
