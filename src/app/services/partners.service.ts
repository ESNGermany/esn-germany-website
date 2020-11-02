import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface PartnersItem {
  id: string;
  Name: string;
  Description: string;
  Deal: string;
  Link: string;
  Logo: {
    alternativeText: string;
    caption: string;
    formats: {
      medium: {
        url: string;
      };
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  public partnersItemList: PartnersItem[];
  public partnersItemListChanged = new Subject<PartnersItem[]>();

  constructor(private http: HttpClient) {}

  fetchPartnersList(): void {
    const url = 'https://strapi.esn-germany.de/partners';
    this.http.get<any>(url).subscribe((data) => {
      data.map((item) => {
        this.partnersItemList.push(item);
      });
      this.partnersItemListChanged.next(this.partnersItemList);
    });
  }
}
