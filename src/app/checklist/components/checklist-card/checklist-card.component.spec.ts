import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistCardComponent } from './checklist-card.component';

describe('ChecklistCardComponent', () => {
  let component: ChecklistCardComponent;
  let fixture: ComponentFixture<ChecklistCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
