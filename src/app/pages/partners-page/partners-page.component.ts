import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PartnersService } from 'src/app/services/partners.service';

interface PartnersItem {
  id: string;
  Name: string;
  Description: string;
  Deal: string;
  Link: string;
  Logo: {
    alternativeText: string;
    caption: string;
    formats: {
      medium: {
        url: string;
      };
    };
  };
}

@Component({
  selector: 'app-partners-page',
  templateUrl: './partners-page.component.html',
  styleUrls: ['./partners-page.component.scss'],
})
export class PartnersPageComponent implements OnInit {
  public partnersItemList: PartnersItem[];

  constructor(private title: Title, private partnersService: PartnersService) {}

  ngOnInit() {
    this.title.setTitle('For Partners - ESN Germany e.V.');
    this.getPartners();
  }

  getPartners(): void {
    this.partnersService
      .fetchPartnersList()
      .subscribe(
        (partnersItemList) => (this.partnersItemList = partnersItemList)
      );
  }

  showMore(id: string) {
    let curr = document.getElementsByClassName('current');
    if (curr.length > 0) {
      curr[0].setAttribute('style', 'display:none;');
      curr[0].classList.remove('current');
    }
    document
      .getElementsByClassName('partner' + id)[0]
      .setAttribute('style', 'display:block;');
    document.getElementsByClassName('partner' + id)[0].classList.add('current');
  }
}
