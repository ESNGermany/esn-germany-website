import { TestBed } from '@angular/core/testing';

import { LegalDocumentsService } from './legal-documents.service';

describe('LegalDocumentsService', () => {
  let service: LegalDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
