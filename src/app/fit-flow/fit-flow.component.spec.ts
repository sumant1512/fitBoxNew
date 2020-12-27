import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitFlowComponent } from './fit-flow.component';

describe('FitFlowComponent', () => {
  let component: FitFlowComponent;
  let fixture: ComponentFixture<FitFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitFlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
