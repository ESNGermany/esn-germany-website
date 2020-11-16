import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BoardPositionsService } from 'src/app/services/boardpositions.service';

interface BoardPositionItem {
  id: string;
  Name: string;
  Position: string;
  Type: "NB" | "AB";
  order: number;
  Email: string;
  Portrait: {
    formats: {
      portrait: {
        url: string;
      }
    }
  }
}
@Component({
  selector: 'app-network-page',
  templateUrl: './network-page.component.html',
  styleUrls: ['./network-page.component.scss'],
})
export class NetworkPageComponent implements OnInit {
  NBItemList: BoardPositionItem[];
  ABItemList: BoardPositionItem[];

  constructor(private title: Title, private boardPositionService: BoardPositionsService) { }

  ngOnInit(): void {
    this.title.setTitle('Our Network - ESN Germany e.V.');
    this.getNB();
    this.getAB();
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
}
