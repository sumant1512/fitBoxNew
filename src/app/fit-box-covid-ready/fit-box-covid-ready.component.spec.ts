import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitBoxCovidReadyComponent } from './fit-box-covid-ready.component';

describe('FitBoxCovidReadyComponent', () => {
  let component: FitBoxCovidReadyComponent;
  let fixture: ComponentFixture<FitBoxCovidReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitBoxCovidReadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitBoxCovidReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
