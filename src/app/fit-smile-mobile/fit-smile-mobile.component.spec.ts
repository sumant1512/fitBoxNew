import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitSmileMobileComponent } from './fit-smile-mobile.component';

describe('FitSmileMobileComponent', () => {
  let component: FitSmileMobileComponent;
  let fixture: ComponentFixture<FitSmileMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitSmileMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitSmileMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
