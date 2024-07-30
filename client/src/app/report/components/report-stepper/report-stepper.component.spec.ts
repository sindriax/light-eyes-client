import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStepperComponent } from './report-stepper.component';

describe('ReportStepperComponent', () => {
  let component: ReportStepperComponent;
  let fixture: ComponentFixture<ReportStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
