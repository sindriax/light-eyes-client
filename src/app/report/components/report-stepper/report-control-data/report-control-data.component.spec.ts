import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportControlDataComponent } from './report-control-data.component';

describe('ReportControlDataComponent', () => {
  let component: ReportControlDataComponent;
  let fixture: ComponentFixture<ReportControlDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportControlDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportControlDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
