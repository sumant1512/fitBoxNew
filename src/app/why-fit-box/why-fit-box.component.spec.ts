import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyFitBoxComponent } from './why-fit-box.component';

describe('WhyFitBoxComponent', () => {
  let component: WhyFitBoxComponent;
  let fixture: ComponentFixture<WhyFitBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyFitBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyFitBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
