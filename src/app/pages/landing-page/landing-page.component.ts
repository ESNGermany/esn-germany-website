import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { DOCUMENT, NgFor, NgIf, NgClass, AsyncPipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';
import { interval } from 'rxjs';

import { ArticleComponent } from 'src/app/components/article/article.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { ContentService } from 'src/app/services/content.service';
import { ContentItem } from 'src/app/services/content-item';
import { GeneralInformationService } from 'src/app/services/general-information.service';
import { GeneralInformationItem } from 'src/app/services/general-information-item';
import { environment as env } from 'src/environments/environment';

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
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgClass,
    NavigationComponent,
    ArticleComponent,
    MarkdownModule,
    FooterComponent,
    AsyncPipe,
  ],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  private index = 0;
  private numImages = 3;
  private imagesLoaded = 0;
  private loading = true;
  private imagesUrl = [
    '/assets/landing/landing1.png',
    '/assets/landing/landing2.png',
    '/assets/landing/landing3.png',
  ];

  public landing_image_div0 = '';
  public landing_image_div1 = '';
  public landing_image_div2 = '';

  public generalInformation: GeneralInformationItem;
  public contentItems: ContentItem[];
  public isAnimated = false;
  private doneAnimating = false;

  @ViewChild('firstNumber', { static: false }) firstNumber: any;
  @ViewChild('secondNumber', { static: false }) secondNumber: any;
  @ViewChild('thirdNumber', { static: false }) thirdNumber: any;

  constructor(
    private render: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private generalInformationService: GeneralInformationService,
    private contentService: ContentService,
  ) {}

  ngOnInit(): void {
    this.contentService.getPageContent('Home').subscribe({
      next: (contentItems?: ContentItem[]) => {
        this.contentItems = contentItems;
      },
      error: (error) => {
        console.error(error);
      },
    });
    this.generalInformationService.getGeneralInformation().subscribe({
      next: (generalInfo?: GeneralInformationItem) => {
        this.generalInformation = generalInfo;
      },
      error: (error) => {
        console.error(error);
      },
    });

    if (this.generalInformation?.background_photos.length > 0) {
      this.landing_image_div0 =
        this.generalInformation?.background_photos[0].directus_files_id;
      this.landing_image_div1 =
        // @ts-ignore:next-line
        this.generalInformation?.background_photos[1].directus_files_id;
      this.landing_image_div2 =
        // @ts-ignore:next-line
        this.generalInformation?.background_photos[2].directus_files_id;
    }
  }

  async ngAfterViewInit() {
    this.imagesUrl.forEach((x) => {
      const image = new Image();
      image.onload = () => {
        this.imagesLoaded++;
      };
      image.src = x;
    });
    // TODO: solve this in a way that makes the app go stable
    interval(2000).subscribe(() => {
      // this.index = (this.index + 1) % this.numImages;
      const image0 = this.document.getElementsByClassName(
        'div0',
      )[0] as HTMLDivElement;
      if (image0 && this.landing_image_div0 !== '') {
        image0.style.backgroundImage = `url(${env.DIRECTUS_URL_IMAGE}${this.landing_image_div0})`;
      }
      const image1 = this.document.getElementsByClassName(
        'div1',
      )[0] as HTMLDivElement;
      if (image1) {
        image1.style.backgroundImage = `url(${env.DIRECTUS_URL_IMAGE}${this.landing_image_div1})`;
      }
      const image2 = this.document.getElementsByClassName(
        'div2',
      )[0] as HTMLDivElement;
      if (image2) {
        image2.style.backgroundImage = `url(${env.DIRECTUS_URL_IMAGE}${this.landing_image_div2})`;
      }
    });

    const section_count = this.generalInformation?.section_counter;

    this.render.listen('window', 'scroll', () => {
      const aPosition = this.firstNumber.nativeElement.getBoundingClientRect();
      if (
        !this.doneAnimating &&
        aPosition.top >= 0 &&
        aPosition.bottom <= window.innerHeight
      ) {
        if (this.isAnimated == false) {
          this.animateValue(this.firstNumber, 0, 1200, 1100);
          this.animateValue(this.secondNumber, 0, 10600, 1800);
          this.animateValue(this.thirdNumber, 0, section_count, 630);

          setTimeout(function () {
            this.isAnimated = true;
            const firstNumberElement =
              this.document.getElementById('firstNumber');
            if (firstNumberElement) {
              firstNumberElement.innerHTML = '1 200 +';
            }
          }, 1100);
          setTimeout(function () {
            this.isAnimated = true;
            const secondNumberElement =
              this.document.getElementById('secondNumber');
            if (secondNumberElement) {
              secondNumberElement.innerHTML = '10 600 +';
            }
          }, 1800);
          this.doneAnimating = true;
        }
      }
    });
  }

  private animateValue(obj, start, end, duration): void {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.nativeElement.innerHTML = Math.floor(
        progress * (end - start) + start,
      );
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}
