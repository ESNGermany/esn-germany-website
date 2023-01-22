import {
  AfterViewInit,
  Component,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Subject, interval } from 'rxjs';

@Component({
  selector: 'esn-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate(600)]),
    ]),
  ],
})

export class LandingPageComponent implements OnInit, AfterViewInit {
  index: number = 0;
  numImages: number = 3;
  imagesLoaded: number = 0;
  loading: boolean = true;
  imagesUrl = [
    '/assets/landing/landing1.png',
    '/assets/landing/landing2.png',
    '/assets/landing/landing3.png',
  ];

  isAnimated: boolean = false;

  @ViewChild('a') a: any;
  @ViewChild('b') b: any;
  @ViewChild('c') c: any;

  constructor(private render: Renderer2) {}
  
  ngAfterViewInit() {
    this.render.listen('window', 'scroll', () => {
      let aPosition = this.a.nativeElement.getBoundingClientRect();

      if (aPosition.top >= 0 && aPosition.bottom <= window.innerHeight) {
        if (this.isAnimated == false) {
          this.animateValue(this.a, 0, 1200, 1100);
          this.animateValue(this.b, 0, 10600, 1800);
          this.animateValue(this.c, 0, 42, 630);

          setTimeout(function () {
            this.isAnimated = true;
            document.getElementById('a').innerHTML = '1200 +';
          }, 1101);
          setTimeout(function () {
            this.isAnimated = true;
            document.getElementById('b').innerHTML = '10 600 +';
          }, 1801);
        }
      }
    });
  }

  ngOnInit() {
    this.imagesUrl.forEach((x, index) => {
      const image = new Image();
      image.onload = () => {
        this.imagesLoaded++;
      };
      image.src = x;
    });
    // TODO: solve this in a way that makes the app go stable
    interval(5000).subscribe(() => {
      this.index = (this.index + 1) % this.numImages;
    });
  }

  animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.nativeElement.innerHTML = Math.floor(
        progress * (end - start) + start
      );
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}
