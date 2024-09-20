import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GalleryComponent, GalleryItem, ImageItem } from 'ng-gallery';

import { MarkdownModule } from 'ngx-markdown';

import { ArticleComponent } from 'src/app/components/article/article.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { PartnersService } from 'src/app/services/partners.service';
import { PartnersItem } from 'src/app/services/partners-item';
import { environment as env} from 'src/environments/environment';

import { NationalPartnerItem } from 'src/app/pages/partners-page/national-partner-item';
import { PartnerService } from 'src/app/pages/partners-page/partner.service';


@Component({
  selector: 'esn-partners-page',
  templateUrl:'./partners-page.component.html',
  styleUrls: ['./partners-page.component.scss'],
  standalone: true,
  imports: [
    NavigationComponent,
    ArticleComponent,
    NgIf,
    NgFor,
    FooterComponent,
    GalleryComponent,
    MarkdownModule,
    AsyncPipe
  ],
})
export class PartnersPageComponent implements OnInit {
  partners: PartnersItem[];
  nationalPartners?: PartnersItem[];
  public images!: GalleryItem[];
  public directusImageUrl: string = env.DIRECTUS_URL_IMAGE;
  partnerService: PartnersService;
  private buttonText = 'Learn More ↓';


  constructor(private partnersService: PartnersService) {}

  ngOnInit(): void {
    this.partnersService
      .getPartners()
      .subscribe((partners?: PartnersItem[]) => {
        this.images = [];
        this.partners = partners;
        partners.forEach((partner: PartnersItem) => {
          this.images.unshift(
            new ImageItem({
              src: `${this.directusImageUrl}${partner.logo}&format=auto`,
              thumb: `${this.directusImageUrl}${partner.logo}?width=200&format=auto`,
            }),
          );
        });

        this.partnerService.getPartners().subscribe({
          next: (nationalPartners: PartnersItem[]) => {
            this.nationalPartners = nationalPartners;
          },
          error: (error) => {
            console.error(error);
          },
        });
      });
  }
 
  public toggleInfo(partner: NationalPartnerItem): void {
    partner.show = !partner.show;

    if (!partner.show) {
      partner.buttonText = `More info`;
    } else {
      partner.buttonText = `Less info`;
    }
  }



}

