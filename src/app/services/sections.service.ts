import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment as env } from 'src/environments/environment';

import { MessageService } from './message.service';
import { SectionItem } from './section-item';

export interface ISectionItem {
  data: SectionItem[];
}

@Injectable({
  providedIn: 'root',
})
export class SectionsService {
  private url = `${env.DIRECTUS_URL}section_map`;
  private northSectionsSubject = new BehaviorSubject<SectionItem[]>([]);
  private westSectionsSubject = new BehaviorSubject<SectionItem[]>([]);
  private eastSectionsSubject = new BehaviorSubject<SectionItem[]>([]);
  private southWestSectionsSubject = new BehaviorSubject<SectionItem[]>([]);
  private southEastSectionsSubject = new BehaviorSubject<SectionItem[]>([]);

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {
    this.fetchSections('north');
    this.fetchSections('west');
    this.fetchSections('east');
    this.fetchSections('southwest');
    this.fetchSections('southeast');
  }

  public getSections(region: string): Observable<SectionItem[]> {
    switch (region) {
      case 'north':
        return this.northSectionsSubject.asObservable();
      case 'west':
        return this.westSectionsSubject.asObservable();
      case 'east':
        return this.eastSectionsSubject.asObservable();
      case 'southwest':
        return this.southWestSectionsSubject.asObservable();
      case 'southeast':
        return this.southEastSectionsSubject.asObservable();
    }
  }

  private fetchSections(region: string): void {
    this.http
      .get<ISectionItem>(`${this.url}?filter[region]=${region}`)
      .pipe(
        catchError(
          this.messageService.handleError<ISectionItem>(
            `fetchSections${region}`,
          ),
        ),
      )
      .subscribe((sections: ISectionItem) => {
        switch (region) {
          case 'north':
            this.northSectionsSubject.next(sections?.data);
            break;
          case 'west':
            this.westSectionsSubject.next(sections?.data);
            break;
          case 'east':
            this.eastSectionsSubject.next(sections?.data);
            break;
          case 'southwest':
            this.southWestSectionsSubject.next(sections?.data);
            break;
          case 'southeast':
            this.southEastSectionsSubject.next(sections?.data);
            break;
        }
      });
  }
}
