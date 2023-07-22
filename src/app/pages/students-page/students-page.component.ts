import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import {
  ISectionItem,
  SectionsService,
} from 'src/app/services/sections.service';

@Component({
  selector: 'esn-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit {
  northSections$: Observable<ISectionItem[]>;
  westSections$: Observable<ISectionItem[]>;
  eastSections$: Observable<ISectionItem[]>;
  southWestSections$: Observable<ISectionItem[]>;
  southEastSections$: Observable<ISectionItem[]>;

  regions: string[] = ['north', 'west', 'east', 'southwest', 'southeast'];

  constructor(private sectionsService: SectionsService) {}

  async ngOnInit() {
    this.northSections$ = this.sectionsService.fetchSectionsNorthList().pipe(
      shareReplay(1),
      map((res: any) => res.data)
    );
    this.westSections$ = this.sectionsService.fetchSectionsWestList().pipe(
      shareReplay(1),
      map((res: any) => res.data)
    );
    this.eastSections$ = this.sectionsService.fetchSectionsEastList().pipe(
      shareReplay(1),
      map((res: any) => res.data)
    );
    this.southEastSections$ = this.sectionsService
      .fetchSectionsSouthEastList()
      .pipe(
        shareReplay(1),
        map((res: any) => res.data)
      );
    this.southWestSections$ = this.sectionsService
      .fetchSectionsSouthWestList()
      .pipe(
        shareReplay(1),
        map((res: any) => res.data)
      );
  }
}
