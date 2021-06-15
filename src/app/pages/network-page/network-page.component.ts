import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BoardPositionsService } from 'src/app/services/board-positions.service';
import { TeamsService } from 'src/app/services/teams.service';

interface BoardPositionItem {
  id: string;
  name: string;
  position: string;
  email: string;
  position_description: string;
  Portrait: [
    {
      formats: {
        portrait: {
          url: string;
        };
      };
    }
  ];
}

interface TeamsItem {
  id: string;
  Teamname: string;
  Description: string;
  Image: {
    alternativeText: string;
    formats: {
      portrait: {
        url: string;
      };
    };
  };
}

@Component({
  selector: 'app-network-page',
  templateUrl: './network-page.component.html',
  styleUrls: ['./network-page.component.scss'],
})
export class NetworkPageComponent implements OnInit {
  NBItemList: BoardPositionItem[];
  ABItemList: BoardPositionItem[];
  RCItemList: BoardPositionItem[];
  teamsList: TeamsItem[];

  constructor(
    private title: Title,
    private boardPositionService: BoardPositionsService,
    private teamsService: TeamsService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Our Network - ESN Germany');
    this.getNB();
    this.getAB();
    this.getRC();
    this.getTeams();
  }

  getNB(): void {
    this.boardPositionService
      .fetchNBList()
      .subscribe((NBItemList) => (this.NBItemList = NBItemList));
  }

  getAB(): void {
    this.boardPositionService
      .fetchABList()
      .subscribe((ABItemList) => (this.ABItemList = ABItemList));
  }

  getRC(): void {
    this.boardPositionService
      .fetchRCList()
      .subscribe((RCItemList) => (this.RCItemList = RCItemList));
  }

  getTeams(): void {
    this.teamsService
      .fetchTeams()
      .subscribe((teamsItemList) => (this.teamsList = teamsItemList));
  }
}
