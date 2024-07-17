import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistEditorComponent } from './checklist-editor1.component';

describe('ChecklistEditorComponent', () => {
  let component: ChecklistEditorComponent;
  let fixture: ComponentFixture<ChecklistEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
