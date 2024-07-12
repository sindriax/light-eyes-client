import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChecklistComponent } from './list-checklist.component';

describe('ListChecklistComponent', () => {
  let component: ListChecklistComponent;
  let fixture: ComponentFixture<ListChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListChecklistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
