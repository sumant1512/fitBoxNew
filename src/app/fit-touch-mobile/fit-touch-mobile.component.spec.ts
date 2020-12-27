import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitTouchMobileComponent } from './fit-touch-mobile.component';

describe('FitTouchMobileComponent', () => {
  let component: FitTouchMobileComponent;
  let fixture: ComponentFixture<FitTouchMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitTouchMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitTouchMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
