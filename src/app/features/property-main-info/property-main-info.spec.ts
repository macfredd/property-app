import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyMainInfo } from './property-main-info';

describe('PropertyMainInfo', () => {
  let component: PropertyMainInfo;
  let fixture: ComponentFixture<PropertyMainInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyMainInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyMainInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
