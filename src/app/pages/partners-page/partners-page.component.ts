import { NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GalleryComponent, GalleryItem, ImageItem } from 'ng-gallery';

import { ArticleComponent } from 'src/app/components/article/article.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { PartnersService } from 'src/app/services/partners.service';
import { PartnersItem } from 'src/app/services/partners-item';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'esn-partners-page',
  templateUrl: './partners-page.component.html',
  styleUrls: ['./partners-page.component.scss'],
  standalone: true,
  imports: [
    NavigationComponent,
    ArticleComponent,
    NgIf,
    NgFor,
    FooterComponent,
    GalleryComponent,
  ],
})
export class PartnersPageComponent implements OnInit {
  partners: PartnersItem[];
  public images!: GalleryItem[];
  public directusImageUrl: string = environment.DIRECTUS_URL_IMAGE;

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
      });
  }
}
