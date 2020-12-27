import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitBoxPlayStoreComponent } from './fit-box-play-store.component';

describe('FitBoxPlayStoreComponent', () => {
  let component: FitBoxPlayStoreComponent;
  let fixture: ComponentFixture<FitBoxPlayStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitBoxPlayStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitBoxPlayStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
