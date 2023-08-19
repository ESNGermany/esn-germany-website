import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';

import { GeneralInformationItem } from './general-information-item';
import { MessageService } from './message.service';

export interface IGeneralInformationItem {
  data: GeneralInformationItem;
}

@Injectable({
  providedIn: 'root',
})
export class GeneralInformationService {
  private url = `${env.DIRECTUS_URL}general_information?fields=*.*`;
  private generalInformationSubject = new BehaviorSubject<
    GeneralInformationItem | undefined
  >(undefined);

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {
    this.fetchGeneralInformation();
  }

  public getGeneralInformation(): Observable<GeneralInformationItem> {
    return this.generalInformationSubject.asObservable();
  }

  private fetchGeneralInformation(): void {
    this.http
      .get<IGeneralInformationItem>(this.url)
      .pipe(
        catchError(
          this.messageService.handleError<IGeneralInformationItem>(
            'fetchGeneralInformation',
          ),
        ),
      )
      .subscribe((generalInformation: IGeneralInformationItem) =>
        this.generalInformationSubject.next(generalInformation?.data),
      );
  }
}
