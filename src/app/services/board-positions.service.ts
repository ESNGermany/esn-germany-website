import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
import { environment as env } from 'src/environments/environment';
import { BoardPositionItem } from './board-position-item';

export interface IBoardPositionItem {
  data: BoardPositionItem[];
}

@Injectable({
  providedIn: 'root',
})
export class BoardPositionsService {
  private ABSubject = new BehaviorSubject<BoardPositionItem[]>([]);
  private NBSubject = new BehaviorSubject<BoardPositionItem[]>([]);
  private RCSubject = new BehaviorSubject<BoardPositionItem[]>([]);
  private BSSubject = new BehaviorSubject<BoardPositionItem[]>([]);

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {
    this.fetchBoard('AB'); // audit board
    this.fetchBoard('NB'); // national board
    this.fetchBoard('RC'); // regional coordinators
    this.fetchBoard('BS'); // board supporters
  }

  public getBoardPositions(board: string): Observable<BoardPositionItem[]> {
    switch (board) {
      case 'AB':
        return this.ABSubject.asObservable();
      case 'NB':
        return this.NBSubject.asObservable();
      case 'RC':
        return this.RCSubject.asObservable();
      case 'BS':
        return this.BSSubject.asObservable();
    }
  }

  private fetchBoard(board: string): void {
    const url = `${env.DIRECTUS_URL}board_members`;
    const params = new HttpParams().set('sort', 'order');

    this.http
      .get<IBoardPositionItem>(`${url}?filter[type]=${board}`, {
        params: params,
      })
      .pipe(
        catchError(
          this.messageService.handleError<IBoardPositionItem>(
            `fetch${board}Positions`,
          ),
        ),
      )
      .subscribe((positions: IBoardPositionItem) => {
        switch (board) {
          case 'AB':
            this.ABSubject.next(positions?.data);
            break;
          case 'NB':
            this.NBSubject.next(positions?.data);
            break;
          case 'RC':
            this.RCSubject.next(positions?.data);
            break;
          case 'BS':
            this.BSSubject.next(positions?.data);
            break;
        }
      });
  }
}
