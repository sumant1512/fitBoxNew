import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitFreedomComponent } from './fit-freedom.component';

describe('FitFreedomComponent', () => {
  let component: FitFreedomComponent;
  let fixture: ComponentFixture<FitFreedomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitFreedomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitFreedomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
