import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import {
  IPartnersItem,
  PartnersService,
} from 'src/app/services/partners.service';
import { environment } from 'src/environments/environment';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { ArticleComponent } from '../../components/article/article.component';
import { NavigationDarkComponent } from '../../components/navigation-dark/navigation-dark.component';

@Component({
  selector: 'esn-partners-page',
  templateUrl: './partners-page.component.html',
  styleUrls: ['./partners-page.component.scss'],
  standalone: true,
  imports: [
    NavigationDarkComponent,
    ArticleComponent,
    NgIf,
    NgFor,
    FooterComponent,
    AsyncPipe,
  ],
})
export class PartnersPageComponent implements OnInit {
  partners$: Observable<IPartnersItem[]>;
  public directusImageUrl: string = environment.DIRECTUS_URL_IMAGE;
  private buttonText = 'Learn More ↓';

  constructor(private partnersService: PartnersService) {}

  async ngOnInit() {
    this.partners$ = this.partnersService.fetchPartnersList().pipe(
      shareReplay(1),
      map((res: any) => res.data),
    );

    // initialize each buttontext
    this.partners$.subscribe((listPartners) => {
      for (const p of listPartners) {
        p.buttontext = this.buttonText;
      }
    });
  }

  public toggleInfo(partner: IPartnersItem): void {
    partner.show = !partner.show;

    if (!partner.show) {
      partner.buttontext = this.buttonText;
    } else {
      partner.buttontext = `Hide text ↑`;
    }
  }
}
