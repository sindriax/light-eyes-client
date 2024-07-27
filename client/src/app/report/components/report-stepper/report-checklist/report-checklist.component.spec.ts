import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportChecklistComponent } from './report-checklist.component';

describe('ReportChecklistComponent', () => {
  let component: ReportChecklistComponent;
  let fixture: ComponentFixture<ReportChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportChecklistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
