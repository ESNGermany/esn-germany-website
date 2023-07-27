import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import {
  IBoardPositionItem,
  BoardPositionsService,
} from 'src/app/services/board-positions.service';
import { ITeamsItem, TeamsService } from 'src/app/services/teams.service';
import { environment } from 'src/environments/environment';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { ArticleComponent } from '../../components/article/article.component';
import { NavigationDarkComponent } from '../../components/navigation-dark/navigation-dark.component';

@Component({
    selector: 'esn-network-page',
    templateUrl: './network-page.component.html',
    styleUrls: ['./network-page.component.scss'],
    standalone: true,
    imports: [
        NavigationDarkComponent,
        ArticleComponent,
        NgIf,
        NgFor,
        FooterComponent,
        AsyncPipe,
    ],
})
export class NetworkPageComponent implements OnInit {
  public directusImageUrl: string = environment.DIRECTUS_URL_IMAGE;

  NBItemList$: Observable<IBoardPositionItem[]>;
  ABItemList$: Observable<IBoardPositionItem[]>;
  RCItemList$: Observable<IBoardPositionItem[]>;
  BSItemList$: Observable<IBoardPositionItem[]>;
  teamsList$: Observable<ITeamsItem[]>;

  constructor(
    private boardPositionService: BoardPositionsService,
    private teamsService: TeamsService
  ) {}

  async ngOnInit() {
    this.ABItemList$ = this.boardPositionService.fetchABList().pipe(
      shareReplay(1),
      map((res: any) => res.data)
    );
    this.NBItemList$ = this.boardPositionService.fetchNBList().pipe(
      shareReplay(1),
      map((res: any) => res.data)
    );
    this.RCItemList$ = this.boardPositionService.fetchRCList().pipe(
      shareReplay(1),
      map((res: any) => res.data)
    );
    this.BSItemList$ = this.boardPositionService.fetchBSList().pipe(
      shareReplay(1),
      map((res: any) => res.data)
    );

    this.teamsList$ = this.teamsService.fetchTeam().pipe(
      shareReplay(1),
      map((res: any) => res.data)
    );
  }
}
