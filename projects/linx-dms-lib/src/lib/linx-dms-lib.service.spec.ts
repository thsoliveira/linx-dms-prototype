import { TestBed } from '@angular/core/testing';

import { LinxDmsLibService } from './linx-dms-lib.service';

describe('LinxDmsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinxDmsLibService = TestBed.get(LinxDmsLibService);
    expect(service).toBeTruthy();
  });
});
