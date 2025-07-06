import { TestBed } from '@angular/core/testing';

import { PropertyMainInfo } from './property-main-info';

describe('PropertyMainInfo', () => {
  let service: PropertyMainInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyMainInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
