import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'esn-article',
    templateUrl: './article.component.html',
    standalone: true,
    imports: [NgClass]
})
export class ArticleComponent{
  @Input() title: string;
  @Input() grayBg: boolean = false;
  @Input() grayBox: boolean = false;
}
