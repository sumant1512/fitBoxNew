import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitFeaturesCarouselComponent } from './fit-features-carousel.component';

describe('FitFeaturesCarouselComponent', () => {
  let component: FitFeaturesCarouselComponent;
  let fixture: ComponentFixture<FitFeaturesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitFeaturesCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitFeaturesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
