import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { BoardPositionsService } from 'src/app/services/board-positions.service';
import { ITeamsItem, TeamsService } from 'src/app/services/teams.service';
import { environment } from 'src/environments/environment';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { ArticleComponent } from '../../components/article/article.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { BoardPositionItem } from 'src/app/services/board-position-item';

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
    AsyncPipe,
  ],
})
export class NetworkPageComponent implements OnInit {
  public directusImageUrl: string = environment.DIRECTUS_URL_IMAGE;

  NBPositions: BoardPositionItem[];
  ABPositions: BoardPositionItem[];
  RCPositions: BoardPositionItem[];
  BSPositions: BoardPositionItem[];
  teamsList$: Observable<ITeamsItem[]>;

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

    this.teamsList$ = this.teamsService.fetchTeam().pipe(
      shareReplay(1),
      map((res: any) => res.data),
    );
  }
}
