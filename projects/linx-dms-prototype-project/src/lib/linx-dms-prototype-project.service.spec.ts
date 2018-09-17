import { TestBed } from '@angular/core/testing';

import { LinxDmsPrototypeProjectService } from './linx-dms-prototype-project.service';

describe('LinxDmsPrototypeProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinxDmsPrototypeProjectService = TestBed.get(LinxDmsPrototypeProjectService);
    expect(service).toBeTruthy();
  });
});
