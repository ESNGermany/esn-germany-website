import { TestBed } from '@angular/core/testing';

import { BoardPositionsService } from './board-positions.service';

describe('BoardPositionsService', () => {
  let service: BoardPositionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardPositionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
