import { TestBed } from '@angular/core/testing';

import { FamillepieceService } from './famillepiece.service';

describe('FamillepieceService', () => {
  let service: FamillepieceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamillepieceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
