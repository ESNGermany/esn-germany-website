import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import {
  PartnersItem,
  PartnersService,
} from 'src/app/services/partners.service';

@Component({
  selector: 'app-partners-page',
  templateUrl: './partners-page.component.html',
  styleUrls: ['./../../../styles.scss', './partners-page.component.scss'],
})
export class PartnersPageComponent implements OnInit {
  partners$: Observable<PartnersItem[]>;

  constructor(private partnersService: PartnersService) {}

  async ngOnInit() {
    this.partners$ = this.partnersService
      .fetchPartnersList()
      .pipe(shareReplay(1));

    // initialize each buttontext
    this.partnersService.fetchPartnersList().subscribe((listPartners) => {
      for (let p of listPartners) {
        p.buttonText = 'Learn More ↓';
      }
    });
  }

  public toggleInfo(partner: PartnersItem): void {
    partner.show = !partner.show;

    if (!partner.show) {
      partner.buttonText = `Learn more ↓`;
    } else {
      partner.buttonText = `Hide text ↑`;
    }
  }
}
