import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistAnswerComponent } from './checklist-answer.component';

describe('ChecklistAnswerComponent', () => {
  let component: ChecklistAnswerComponent;
  let fixture: ComponentFixture<ChecklistAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
