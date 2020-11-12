import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Title } from '@angular/platform-browser';

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
  constructor(private title: Title) {}

  index: number = 0;
  numImages: number = 3;
  imagesLoaded: number = 0;
  loading: boolean = true;
  imagesUrl = [
    '../../../assets/landing1.png',
    '../../../assets/landing2.png',
    '../../../assets/landing3.png',
    '../../../assets/landing1.png',
  ];

  ngOnInit() {
    this.title.setTitle('ESN Germany e.V.');
    this.imagesUrl.forEach((x, index) => {
      const image = new Image();
      image.onload = () => {
        this.imagesLoaded++;
      };
      image.src = x;
    });

    interval(5000).subscribe(() => {
      this.index = (this.index + 1) % this.numImages;
    });
  }
}
