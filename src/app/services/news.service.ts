import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface NewsItem {
  id: string;
  Title: string;
  Shorttext: string;
  Image: {
    id: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      medium: {
        url: string;
      };
    };
  };
  Author: string;
  Text: string;
  published_at: Date;
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  public newsItemList: NewsItem[];
  public newsItemListChanged = new Subject<NewsItem[]>();

  constructor(private http: HttpClient) {}

  fetchNewsList(): void {
    const url = 'https://strapi.esn-germany.de/news-items?_limit=5';
    this.http.get<any>(url).subscribe((data) => {
      data.map((item) => {
        this.newsItemList.push(item);
      });
      this.newsItemListChanged.next(this.newsItemList);
    });
  }
}
