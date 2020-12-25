import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitFreedomMobileComponent } from './fit-freedom-mobile.component';

describe('FitFreedomMobileComponent', () => {
  let component: FitFreedomMobileComponent;
  let fixture: ComponentFixture<FitFreedomMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitFreedomMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitFreedomMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
