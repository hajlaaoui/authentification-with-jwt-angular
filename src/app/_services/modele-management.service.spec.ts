import { TestBed } from '@angular/core/testing';

import { ModeleManagementService } from './modele-management.service';

describe('ModeleManagementService', () => {
  let service: ModeleManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeleManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
