import { TestBed } from '@angular/core/testing';

import { NinjagoldService } from './ninjagold.service';

describe('NinjagoldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NinjagoldService = TestBed.get(NinjagoldService);
    expect(service).toBeTruthy();
  });
});
