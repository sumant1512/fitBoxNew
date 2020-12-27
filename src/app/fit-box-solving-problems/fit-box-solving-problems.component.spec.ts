import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitBoxSolvingProblemsComponent } from './fit-box-solving-problems.component';

describe('FitBoxSolvingProblemsComponent', () => {
  let component: FitBoxSolvingProblemsComponent;
  let fixture: ComponentFixture<FitBoxSolvingProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitBoxSolvingProblemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitBoxSolvingProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
