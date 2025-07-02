import { TestBed } from '@angular/core/testing';

import { FeaturedProperties } from './featured-properties';

describe('FeaturedProperties', () => {
  let service: FeaturedProperties;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedProperties);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
