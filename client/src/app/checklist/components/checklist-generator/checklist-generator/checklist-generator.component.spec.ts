import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistGeneratorComponent } from './checklist-generator.component';

describe('ChecklistGeneratorComponent', () => {
  let component: ChecklistGeneratorComponent;
  let fixture: ComponentFixture<ChecklistGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
