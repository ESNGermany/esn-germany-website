import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, shareReplay } from 'rxjs';
import {
  BoardPositionItem,
  BoardPositionsService,
} from 'src/app/services/board-positions.service';
import { TeamsItem, TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-network-page',
  templateUrl: './network-page.component.html',
  styleUrls: ['./../../../styles.scss', './network-page.component.scss'],
})
export class NetworkPageComponent implements OnInit {
  NBItemList$: Observable<BoardPositionItem[]>;
  ABItemList$: Observable<BoardPositionItem[]>;
  RCItemList$: Observable<BoardPositionItem[]>;
  BSItemList$: Observable<BoardPositionItem[]>;
  teamsList$: Observable<TeamsItem[]>;

  constructor(
    private title: Title,
    private boardPositionService: BoardPositionsService,
    private teamsService: TeamsService
  ) {
    this.title.setTitle('Our Network - ESN Germany');
  }

  async ngOnInit() {
    this.ABItemList$ = this.boardPositionService
      .fetchABList()
      .pipe(shareReplay(1));
    this.NBItemList$ = this.boardPositionService
      .fetchNBList()
      .pipe(shareReplay(1));
    this.RCItemList$ = this.boardPositionService
      .fetchRCList()
      .pipe(shareReplay(1));
    this.BSItemList$ = this.boardPositionService
      .fetchBSList()
      .pipe(shareReplay(1));
    this.teamsList$ = this.teamsService.fetchTeam().pipe(shareReplay(1));
  }
}
