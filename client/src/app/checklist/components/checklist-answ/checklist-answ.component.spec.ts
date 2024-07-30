import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistAnswComponent } from './checklist-answ.component';

describe('ChecklistAnswComponent', () => {
  let component: ChecklistAnswComponent;
  let fixture: ComponentFixture<ChecklistAnswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistAnswComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistAnswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
