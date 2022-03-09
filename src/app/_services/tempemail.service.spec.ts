import { TestBed } from '@angular/core/testing';

import { TempemailService } from './tempemail.service';

describe('TempemailService', () => {
  let service: TempemailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempemailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
