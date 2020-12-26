import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsToJoinFitBoxComponent } from './reasons-to-join-fit-box.component';

describe('ReasonsToJoinFitBoxComponent', () => {
  let component: ReasonsToJoinFitBoxComponent;
  let fixture: ComponentFixture<ReasonsToJoinFitBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonsToJoinFitBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonsToJoinFitBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
