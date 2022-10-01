import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, shareReplay } from 'rxjs';
import {
  SectionItem,
  SectionsService,
} from 'src/app/services/sections.service';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./../../../styles.scss', './students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit {
  northSections$: Observable<SectionItem[]>;
  westSections$: Observable<SectionItem[]>;
  eastSections$: Observable<SectionItem[]>;
  southWestSections$: Observable<SectionItem[]>;
  southEastSections$: Observable<SectionItem[]>;

  regions: string[] = ['North', 'West', 'East', 'SouthWest', 'SouthEast'];

  constructor(private title: Title, private sectionsService: SectionsService) {
    this.title.setTitle('For Students - ESN Germany');
  }

  async ngOnInit() {
    this.northSections$ = this.sectionsService
      .fetchSectionsNorthList()
      .pipe(shareReplay(1));
    this.westSections$ = this.sectionsService
      .fetchSectionsWestList()
      .pipe(shareReplay(1));
    this.eastSections$ = this.sectionsService
      .fetchSectionsEastList()
      .pipe(shareReplay(1));
    this.southEastSections$ = this.sectionsService
      .fetchSectionsSouthEastList()
      .pipe(shareReplay(1));
    this.southWestSections$ = this.sectionsService
      .fetchSectionsSouthWestList()
      .pipe(shareReplay(1));
  }
}
