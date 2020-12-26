import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitTouchComponent } from './fit-touch.component';

describe('FitTouchComponent', () => {
  let component: FitTouchComponent;
  let fixture: ComponentFixture<FitTouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitTouchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
