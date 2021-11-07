import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, shareReplay } from 'rxjs';
import {
  PartnersItem,
  PartnersService,
} from 'src/app/services/partners.service';

@Component({
  selector: 'app-partners-page',
  templateUrl: './partners-page.component.html',
  styleUrls: ['./partners-page.component.scss'],
})
export class PartnersPageComponent implements OnInit {
  partners$: Observable<PartnersItem[]>;

  constructor(
    private title: Title,
    @Inject(DOCUMENT) private document: Document,
    private partnersService: PartnersService
  ) {}

  async ngOnInit() {
    this.title.setTitle('ESNcard & Partners - ESN Germany');
    this.partners$ = this.partnersService
      .fetchPartnersList()
      .pipe(shareReplay(1));
  }

  showMore(id: string) {
    let curr = this.document.getElementsByClassName('current');
    if (curr.length > 0) {
      curr[0].setAttribute('style', 'display:none;');
      curr[0].classList.remove('current');
    }
    this.document
      .getElementsByClassName('partner' + id)[0]
      .setAttribute('style', 'display:block;');
    this.document
      .getElementsByClassName('partner' + id)[0]
      .classList.add('current');
  }
}
