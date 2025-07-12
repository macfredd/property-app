import { TestBed } from '@angular/core/testing';
import { PropertyDetailInfoService } from './property-main-info';


describe('PropertyDetailInfo', () => {
  let service: PropertyDetailInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyDetailInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
