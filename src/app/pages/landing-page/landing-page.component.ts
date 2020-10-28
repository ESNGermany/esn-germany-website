import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate(600)]),
    ]),
  ],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  index: number = 0;
  numImages: number = 2;
  imagesLoaded: number = 0;
  loading: boolean = true;
  imagesUrl = [
    "url('../../../assets/landing1.png')",
    "url('../../../assets/landing2.png')",
    'https://picsum.photos/id/301/2500/1667',
    'https://picsum.photos/id/400/2500/1667',
  ];

  ngOnInit() {
    this.imagesUrl.forEach((x, index) => {
      const image = new Image();
      image.onload = () => {
        this.imagesLoaded++;
        this.loading = this.imagesLoaded != this.numImages;
      };
      image.src = x;
    });

    interval(5000).subscribe(() => {
      if (!this.loading) this.index = (this.index + 1) % this.numImages;
    });
  }
}
