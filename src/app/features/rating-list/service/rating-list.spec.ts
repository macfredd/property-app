import { TestBed } from '@angular/core/testing';

import { RatingList } from './rating-list';

describe('RatingList', () => {
  let service: RatingList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
