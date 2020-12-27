import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitBoxLogoComponent } from './fit-box-logo.component';

describe('FitBoxLogoComponent', () => {
  let component: FitBoxLogoComponent;
  let fixture: ComponentFixture<FitBoxLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitBoxLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitBoxLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
