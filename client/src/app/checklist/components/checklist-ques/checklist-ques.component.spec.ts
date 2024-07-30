import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistQuesComponent } from './checklist-ques.component';

describe('ChecklistQuesComponent', () => {
  let component: ChecklistQuesComponent;
  let fixture: ComponentFixture<ChecklistQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistQuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
