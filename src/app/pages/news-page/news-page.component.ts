import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, shareReplay } from 'rxjs';
import { NewsItem, NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  news$: Observable<NewsItem[]>;

  constructor(private title: Title, private newsService: NewsService) {}

  async ngOnInit() {
    this.title.setTitle('News - ESN Germany');
    this.news$ = this.newsService.fetchNewsList().pipe(shareReplay(1));
  }
  // showText(id: string) {
  //   document
  //     .getElementsByClassName('news' + id)[0]
  //     .setAttribute('style', 'display:block;');
  //   document.getElementById('span' + id).style.display = 'none';
  //   document.getElementById('shortnews' + id).style.display = 'none';
  //   document
  //     .getElementsByClassName('spanLess' + id)[0]
  //     .setAttribute('style', 'display:block;');
  // }

  // showLess(id: string) {
  //   document
  //     .getElementsByClassName('news' + id)[0]
  //     .setAttribute('style', 'display:none;');
  //   document.getElementById('span' + id).style.display = 'block';
  //   document.getElementById('shortnews' + id).style.display = 'block';
  //   document
  //     .getElementsByClassName('spanLess' + id)[0]
  //     .setAttribute('style', 'display:none;');
  // }
}
