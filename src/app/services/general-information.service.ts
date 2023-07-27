import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { environment as env } from 'src/environments/environment';

export interface IGeneralInformationItem {
  email: string;
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  section_counter: number;
  banner_text: string;
  address_co: string;
  address_street: string;
  address_city: string;
  background_photos: [
    {
      directus_files_id: string | undefined;
    }
  ];
}

@Injectable({
  providedIn: 'root',
})
export class GeneralInformationService {
  private url = `${env.DIRECTUS_URL}general_information?fields=*.*`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  public fetchGeneralInformation(): Observable<IGeneralInformationItem> {
    return this.http.get<IGeneralInformationItem>(this.url).pipe(
      shareReplay(1),
      map((res: any) => res.data),
      tap((_) => this.log('fetched general information')),
      catchError(this.handleError<IGeneralInformationItem>('fetchGeneralInformation'))
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
    this.messageService.add(`GeneralInformationService: ${message}`);
  }
}
