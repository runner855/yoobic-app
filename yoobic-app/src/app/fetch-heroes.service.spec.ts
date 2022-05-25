import { TestBed } from '@angular/core/testing';

import { FetchHeroesService } from './fetch-heroes.service';

describe('FetchHeroesService', () => {
  let service: FetchHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
