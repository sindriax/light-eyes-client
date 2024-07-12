import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistTemplateViewComponent } from './checklist-template-view.component';

describe('ChecklistTemplateViewComponent', () => {
  let component: ChecklistTemplateViewComponent;
  let fixture: ComponentFixture<ChecklistTemplateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistTemplateViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistTemplateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
