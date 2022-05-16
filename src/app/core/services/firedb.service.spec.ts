import { TestBed } from '@angular/core/testing';

import { FiredbService } from './firedb.service';

describe('FiredbService', () => {
  let service: FiredbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiredbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
