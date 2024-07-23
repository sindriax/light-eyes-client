import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChecklistComponent } from './edit-checklist.component';

describe('EditChecklistComponent', () => {
  let component: EditChecklistComponent;
  let fixture: ComponentFixture<EditChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditChecklistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
