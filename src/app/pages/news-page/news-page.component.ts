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
  private newsItemId: string;

  constructor(private title: Title, private newsService: NewsService) {}

  async ngOnInit() {
    this.title.setTitle('News - ESN Germany');
    this.news$ = this.newsService.fetchNewsList().pipe(shareReplay(1));
    this.setNewsItemId();
  }

  private setNewsItemId(): void {
    this.news$.subscribe((NewsItemList: NewsItem[]) => {
      for (let newsItem of NewsItemList) {
        newsItem.newsItemId = this.generateNewsItemId(newsItem.Title);
      }
    });
  }

  private generateNewsItemId(title: string): string {
    // no uppercase letters for URL
    this.newsItemId = title.toLowerCase();
    // remove all special characters
    this.newsItemId = this.newsItemId
      .split(/[&\/\\#,+()$~%.'":*-?!<>{}]/g)
      .join('');
    // remove double spaces
    this.newsItemId = this.newsItemId.split('  ').join(' ');
    // replace every space with a hyphen
    this.newsItemId = this.newsItemId.split(' ').join('-');
    // if string ends with a hyphen, remove it
    if (this.newsItemId.substring(this.newsItemId.length - 1) === '-') {
      this.newsItemId = this.newsItemId.substring(
        0,
        this.newsItemId.length - 1
      );
    }

    return this.newsItemId;
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
