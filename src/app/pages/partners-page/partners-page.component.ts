import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import {
  IPartnersItem,
  PartnersService,
} from 'src/app/services/partners.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'esn-partners-page',
  templateUrl: './partners-page.component.html',
  styleUrls: ['./partners-page.component.scss'],
})
export class PartnersPageComponent implements OnInit {
  partners$: Observable<IPartnersItem[]>;
  public directusImageUrl: string = environment.DIRECTUS_URL_IMAGE;
  private buttonText = 'Learn More ↓';

  constructor(private partnersService: PartnersService) {}

  async ngOnInit() {
    this.partners$ = this.partnersService.fetchPartnersList().pipe(
      shareReplay(1),
      map((res: any) => res.data)
    );

    // initialize each buttontext
    this.partners$.subscribe((listPartners) => {
      for (let p of listPartners) {
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
