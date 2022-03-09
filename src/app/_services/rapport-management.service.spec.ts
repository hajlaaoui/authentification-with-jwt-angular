import { TestBed } from '@angular/core/testing';

import { RapportManagementService } from './rapport-management.service';

describe('RapportManagementService', () => {
  let service: RapportManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapportManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
