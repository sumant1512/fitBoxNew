import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitFounderComponent } from './fit-founder.component';

describe('FitFounderComponent', () => {
  let component: FitFounderComponent;
  let fixture: ComponentFixture<FitFounderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitFounderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitFounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
