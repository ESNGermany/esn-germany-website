import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BoardPositionsService } from 'src/app/services/board-positions.service';

interface BoardPositionItem {
  id: string;
  Name: string;
  Position: string;
  Email: string;
  Portrait: [
    {
      alternativeText: string;
      formats: {
        portrait: {
          url: string;
        };
      };
    }
  ];
}

@Component({
  selector: 'app-network-page',
  templateUrl: './network-page.component.html',
  styleUrls: ['./network-page.component.scss'],
})
export class NetworkPageComponent implements OnInit {
  ABItemList: BoardPositionItem[];
  NBItemList: BoardPositionItem[];

  constructor(
    private title: Title,
    private boardPositionService: BoardPositionsService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Our Network - ESN Germany e.V.');
    this.getAB();
    this.getNB();
  }

  getAB(): void {
    this.boardPositionService
      .fetchABPositionList()
      .subscribe((ABItemList) => (this.ABItemList = ABItemList));
  }

  getNB(): void {
    this.boardPositionService
      .fetchNBPositionList()
      .subscribe((NBItemList) => (this.NBItemList = NBItemList));
  }
}
