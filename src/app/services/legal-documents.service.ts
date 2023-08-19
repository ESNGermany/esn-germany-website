import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment as env } from 'src/environments/environment';

import { LegalDocument } from './legal-document-item';
import { MessageService } from './message.service';

export interface ILegalDocumentsItem {
  data: LegalDocument;
}

@Injectable({
  providedIn: 'root',
})
export class LegalDocumentsService {
  private url = `${env.DIRECTUS_URL}legal_documents`;
  private EPPSubject = new BehaviorSubject<LegalDocument | undefined>(
    undefined,
  );
  private SatzungSubject = new BehaviorSubject<LegalDocument | undefined>(
    undefined,
  );
  private CocSubject = new BehaviorSubject<LegalDocument | undefined>(
    undefined,
  );
  private OrdnungSubject = new BehaviorSubject<LegalDocument | undefined>(
    undefined,
  );
  private KonsultationsordnungSubject = new BehaviorSubject<
    LegalDocument | undefined
  >(undefined);

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {
    this.fetchLegalDocument('EPP');
    this.fetchLegalDocument('Ordnung');
    this.fetchLegalDocument('Verhaltenskodex / Code of Conduct');
    this.fetchLegalDocument('Konsultationsordnung');
    this.fetchLegalDocument('Satzung');
  }

  public getLegalDocument(document: string): Observable<LegalDocument> {
    switch (document) {
      case 'EPP':
        return this.EPPSubject.asObservable();
      case 'Ordnung':
        return this.OrdnungSubject.asObservable();
      case 'Verhaltenskodex / Code of Conduct':
        return this.CocSubject.asObservable();
      case 'Konsultationsordnung':
        return this.KonsultationsordnungSubject.asObservable();
      case 'Satzung':
        return this.SatzungSubject.asObservable();
    }
  }

  private fetchLegalDocument(id: string): void {
    this.http
      .get<ILegalDocumentsItem>(`${this.url}?filter[title]=${id}`)
      .pipe(
        catchError(
          this.messageService.handleError<ILegalDocumentsItem>(
            `fetchLegalDocument${id}`,
          ),
        ),
      )
      .subscribe((doc: ILegalDocumentsItem) => {
        switch (id) {
          case 'EPP':
            this.EPPSubject.next(doc?.data[0]);
            break;
          case 'Ordnung':
            this.OrdnungSubject.next(doc?.data[0]);
            break;
          case 'Verhaltenskodex / Code of Conduct':
            this.CocSubject.next(doc?.data[0]);
            break;
          case 'Konsultationsordnung':
            this.KonsultationsordnungSubject.next(doc?.data[0]);
            break;
          case 'Satzung':
            this.SatzungSubject.next(doc?.data[0]);
            break;
        }
      });
  }
}
