import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistStepperComponent } from './checklist-stepper.component';

describe('ChecklistStepperComponent', () => {
  let component: ChecklistStepperComponent;
  let fixture: ComponentFixture<ChecklistStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
