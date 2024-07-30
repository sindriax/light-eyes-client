import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistCheckboxComponent } from './checklist-checkbox.component';

describe('ChecklistCheckboxComponent', () => {
  let component: ChecklistCheckboxComponent;
  let fixture: ComponentFixture<ChecklistCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
