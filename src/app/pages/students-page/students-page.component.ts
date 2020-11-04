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
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit {
  public partnersItemList: PartnersItem[];
  constructor(private title: Title, private partnersService: PartnersService) {}

  ngOnInit(): void {
    this.title.setTitle('For Students - ESN Germany e.V.');
    // this.getPartners();
  }

  // getPartners(): void {
  //   this.partnersService.fetchPartnersList()
  //     .subscribe(partnersItemList => this.partnersItemList = partnersItemList)
  // }
}
