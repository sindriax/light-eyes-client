import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistQuestionComponent } from './checklist-question.component';

describe('ChecklistQuestionComponent', () => {
  let component: ChecklistQuestionComponent;
  let fixture: ComponentFixture<ChecklistQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
