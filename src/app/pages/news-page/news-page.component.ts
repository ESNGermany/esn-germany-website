import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NewsService } from 'src/app/services/news.service';

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

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  public newsItemList: NewsItem[];

  constructor(private title: Title, private newsService: NewsService) {}

  ngOnInit() {
    this.title.setTitle('News - ESN Germany e.V.');

    this.newsService.newsItemList = new Array<NewsItem>();
    this.newsService.fetchNewsList();

    this.newsService.newsItemListChanged.subscribe(
      (newsItemList: NewsItem[]) => {
        this.newsItemList = newsItemList;
      }
    );
  }

  showText(id: string) {
    document
      .getElementsByClassName('news' + id)[0]
      .setAttribute('style', 'display:block;');
    document.getElementById('span' + id).style.display = 'none';
    document.getElementById('shortnews' + id).style.display = 'none';
    document
      .getElementsByClassName('spanLess' + id)[0]
      .setAttribute('style', 'display:block;');
  }

  showLess(id: string) {
    document
      .getElementsByClassName('news' + id)[0]
      .setAttribute('style', 'display:none;');
    document.getElementById('span' + id).style.display = 'block';
    document.getElementById('shortnews' + id).style.display = 'block';
    document
      .getElementsByClassName('spanLess' + id)[0]
      .setAttribute('style', 'display:none;');
  }
}
