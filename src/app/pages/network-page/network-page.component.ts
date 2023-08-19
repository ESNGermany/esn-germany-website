import { NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ArticleComponent } from 'src/app/components/article/article.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { BoardPositionsService } from 'src/app/services/board-positions.service';
import { BoardPositionItem } from 'src/app/services/board-position-item';
import { TeamsService } from 'src/app/services/teams.service';
import { TeamsItem } from 'src/app/services/teams-item';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'esn-network-page',
  templateUrl: './network-page.component.html',
  styleUrls: ['./network-page.component.scss'],
  standalone: true,
  imports: [
    NavigationComponent,
    ArticleComponent,
    NgIf,
    NgFor,
    FooterComponent,
  ],
})
export class NetworkPageComponent implements OnInit {
  public directusImageUrl: string = environment.DIRECTUS_URL_IMAGE;

  public NBPositions: BoardPositionItem[];
  public ABPositions: BoardPositionItem[];
  public RCPositions: BoardPositionItem[];
  public BSPositions: BoardPositionItem[];
  public teamsList: TeamsItem[];

  constructor(
    private boardPositionService: BoardPositionsService,
    private teamsService: TeamsService,
  ) {}

  ngOnInit(): void {
    this.boardPositionService.getBoardPositions('AB').subscribe({
      next: (positions?: BoardPositionItem[]) => {
        this.ABPositions = positions;
      },
      error: (error) => {
        console.error(error);
      },
    });
    this.boardPositionService.getBoardPositions('NB').subscribe({
      next: (positions?: BoardPositionItem[]) => {
        this.NBPositions = positions;
      },
      error: (error) => {
        console.error(error);
      },
    });
    this.boardPositionService.getBoardPositions('RC').subscribe({
      next: (positions?: BoardPositionItem[]) => {
        this.RCPositions = positions;
      },
      error: (error) => {
        console.error(error);
      },
    });
    this.boardPositionService.getBoardPositions('BS').subscribe({
      next: (positions?: BoardPositionItem[]) => {
        this.BSPositions = positions;
      },
      error: (error) => {
        console.error(error);
      },
    });

    this.teamsService.getTeams().subscribe({
      next: (teams?: TeamsItem[]) => {
        this.teamsList = teams;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
