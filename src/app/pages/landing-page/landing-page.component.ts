import {
  AfterViewInit,
  Component,
  Inject,
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
import { firstValueFrom, interval } from 'rxjs';
import { DOCUMENT, NgFor, NgIf, NgClass, AsyncPipe } from '@angular/common';
import {
  GeneralInformationService,
  IGeneralInformationItem,
} from 'src/app/services/general-information.service';
import { environment as env } from 'src/environments/environment';
import { ContentService, IContentItem } from 'src/app/services/content.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { MarkdownModule } from 'ngx-markdown';
import { ArticleComponent } from '../../components/article/article.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';

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

  public generalInformation: IGeneralInformationItem =
    {} as IGeneralInformationItem;
  public contentItems: IContentItem[];
  public isAnimated = false;
  private doneAnimating = false;

  public landing_image_div0 = '';
  public landing_image_div1 = '';
  public landing_image_div2 = '';

  @ViewChild('a', { static: false }) a: any;
  @ViewChild('b', { static: false }) b: any;
  @ViewChild('c', { static: false }) c: any;

  constructor(
    private render: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private generalInformationService: GeneralInformationService,
    private contentService: ContentService,
  ) {}

  async ngOnInit() {
    this.contentItems = await firstValueFrom(
      this.contentService.fetchPageContent('Home'),
    );
    this.generalInformation = await firstValueFrom(
      this.generalInformationService.fetchGeneralInformation(),
    );
    if (this.generalInformation.background_photos.length > 0) {
      this.landing_image_div0 =
        this.generalInformation.background_photos[0].directus_files_id;
      this.landing_image_div1 =
        // @ts-ignore:next-line
        this.generalInformation.background_photos[1].directus_files_id;
      this.landing_image_div2 =
        // @ts-ignore:next-line
        this.generalInformation.background_photos[2].directus_files_id;
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
      if (image0) {
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

    const section_count = await firstValueFrom(
      this.generalInformationService.fetchGeneralInformation(),
    ).then((x) => x.section_counter);

    this.render.listen('window', 'scroll', () => {
      const aPosition = this.a.nativeElement.getBoundingClientRect();
      if (
        !this.doneAnimating &&
        aPosition.top >= 0 &&
        aPosition.bottom <= window.innerHeight
      ) {
        if (this.isAnimated == false) {
          this.animateValue(this.a, 0, 1200, 1100);
          this.animateValue(this.b, 0, 10600, 1800);
          this.animateValue(this.c, 0, section_count, 630);

          setTimeout(function () {
            this.isAnimated = true;
            const aEl = this.document.getElementById('a');
            if (aEl) {
              aEl.innerHTML = '1 200 +';
            }
          }, 1100);
          setTimeout(function () {
            this.isAnimated = true;
            const bEl = this.document.getElementById('b');
            if (bEl) {
              bEl.innerHTML = '10 600 +';
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
