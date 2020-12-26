import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitSmileComponent } from './fit-smile.component';

describe('FitSmileComponent', () => {
  let component: FitSmileComponent;
  let fixture: ComponentFixture<FitSmileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitSmileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitSmileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
