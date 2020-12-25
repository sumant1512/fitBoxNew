import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourReasonsToJoinComponent } from './four-reasons-to-join.component';

describe('FourReasonsToJoinComponent', () => {
  let component: FourReasonsToJoinComponent;
  let fixture: ComponentFixture<FourReasonsToJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourReasonsToJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourReasonsToJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
