import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBasicDataComponent } from './report-basic-data.component';

describe('ReportBasicDataComponent', () => {
  let component: ReportBasicDataComponent;
  let fixture: ComponentFixture<ReportBasicDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportBasicDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportBasicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
