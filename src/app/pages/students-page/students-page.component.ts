import { NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ArticleComponent } from 'src/app/components/article/article.component';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { SectionmapComponent } from 'src/app/components/sectionmap/sectionmap.component';
import { SectionsService } from 'src/app/services/sections.service';
import { SectionItem } from 'src/app/services/section-item';

@Component({
  selector: 'esn-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
  standalone: true,
  imports: [
    NavigationComponent,
    ArticleComponent,
    SectionmapComponent,
    NgIf,
    ExpandableComponent,
    NgFor,
    FooterComponent,
  ],
})
export class StudentsPageComponent implements OnInit {
  public northSections: SectionItem[];
  public westSections: SectionItem[];
  public eastSections: SectionItem[];
  public southWestSections: SectionItem[];
  public southEastSections: SectionItem[];

  constructor(private sectionsService: SectionsService) {}

  ngOnInit(): void {
    this.sectionsService.getSections('north').subscribe({
      next: (sections?: SectionItem[]) => {
        this.northSections = sections;
      },
      error: (error) => {
        console.error(error);
      },
    });
    this.sectionsService.getSections('west').subscribe({
      next: (sections?: SectionItem[]) => {
        this.westSections = sections;
      },
      error: (error) => {
        console.error(error);
      },
    });
    this.sectionsService.getSections('east').subscribe({
      next: (sections?: SectionItem[]) => {
        this.eastSections = sections;
      },
      error: (error) => {
        console.error(error);
      },
    });
    this.sectionsService.getSections('southwest').subscribe({
      next: (sections?: SectionItem[]) => {
        this.southWestSections = sections;
      },
      error: (error) => {
        console.error(error);
      },
    });
    this.sectionsService.getSections('southeast').subscribe({
      next: (sections?: SectionItem[]) => {
        this.southEastSections = sections;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
