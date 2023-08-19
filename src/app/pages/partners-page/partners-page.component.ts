import { NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
  ],
})
export class PartnersPageComponent implements OnInit {
  partners: PartnersItem[];
  public directusImageUrl: string = environment.DIRECTUS_URL_IMAGE;
  private buttonText = 'Learn More ↓';

  constructor(private partnersService: PartnersService) {}

  ngOnInit(): void {
    this.partnersService
      .getPartners()
      .subscribe((partners?: PartnersItem[]) => {
        this.partners = partners;
      });
  }

  public toggleInfo(partner: PartnersItem): void {
    partner.show = !partner.show;

    if (!partner.show) {
      partner.buttontext = this.buttonText;
    } else {
      partner.buttontext = `Hide text ↑`;
    }
  }
}
