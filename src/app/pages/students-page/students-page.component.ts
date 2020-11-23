import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SectionsService } from 'src/app/services/sections.service';

interface SectionItem {
  id: string;
  name: string;
  city: string;
  email: string;
  website: string;
  region: 'North' | 'West' | 'East' | 'SouthWest' | 'SouthEast';
}

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit {
  public northSectionItemList: SectionItem[];
  public westSectionItemList: SectionItem[];
  public eastSectionItemList: SectionItem[];
  public southWestSectionItemList: SectionItem[];
  public southEastSectionItemList: SectionItem[];

  public regions: string[] = [
    'North',
    'West',
    'East',
    'SouthWest',
    'SouthEast',
  ];

  constructor(private title: Title, private sectionsService: SectionsService) {}

  ngOnInit(): void {
    this.title.setTitle('For Students - ESN Germany');
    this.getNorthSections();
    this.getWestSections();
    this.getEastSections();
    this.getSouthWestSections();
    this.getSouthEastSections();
  }

  getNorthSections(): void {
    this.sectionsService
      .fetchSectionsNorthList()
      .subscribe(
        (northSectionItemList) =>
          (this.northSectionItemList = northSectionItemList)
      );
  }

  getWestSections(): void {
    this.sectionsService
      .fetchSectionsWestList()
      .subscribe(
        (westSectionItemList) =>
          (this.westSectionItemList = westSectionItemList)
      );
  }

  getEastSections(): void {
    this.sectionsService
      .fetchSectionsEastList()
      .subscribe(
        (eastSectionItemList) =>
          (this.eastSectionItemList = eastSectionItemList)
      );
  }

  getSouthEastSections(): void {
    this.sectionsService
      .fetchSectionsSouthEastList()
      .subscribe(
        (southEastSectionItemList) =>
          (this.southEastSectionItemList = southEastSectionItemList)
      );
  }

  getSouthWestSections(): void {
    this.sectionsService
      .fetchSectionsSouthWestList()
      .subscribe(
        (southWestSectionItemList) =>
          (this.southWestSectionItemList = southWestSectionItemList)
      );
  }
}
