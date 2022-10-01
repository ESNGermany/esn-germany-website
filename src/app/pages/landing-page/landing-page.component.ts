import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./../../../styles.scss', './landing-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate(600)]),
    ]),
  ],
})
export class LandingPageComponent {
  index: number = 0;
  numImages: number = 3;
  imagesLoaded: number = 0;
  loading: boolean = true;
  imagesUrl = [
    '/assets/landing/landing1.png',
    '/assets/landing/landing2.png',
    '/assets/landing/landing3.png',
    '/assets/landing/landing1.png',
  ];
}
