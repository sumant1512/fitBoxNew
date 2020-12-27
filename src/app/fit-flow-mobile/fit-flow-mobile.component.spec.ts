import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitFlowMobileComponent } from './fit-flow-mobile.component';

describe('FitFlowMobileComponent', () => {
  let component: FitFlowMobileComponent;
  let fixture: ComponentFixture<FitFlowMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitFlowMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitFlowMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
