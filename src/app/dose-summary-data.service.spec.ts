import { TestBed } from '@angular/core/testing';

import { DoseSummaryDataService } from './dose-summary-data.service';

describe('DoseSummaryDataService', () => {
  let service: DoseSummaryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoseSummaryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
