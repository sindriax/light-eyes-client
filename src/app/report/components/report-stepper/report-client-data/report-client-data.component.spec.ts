import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportClientDataComponent } from './report-client-data.component';

describe('ReportClientDataComponent', () => {
  let component: ReportClientDataComponent;
  let fixture: ComponentFixture<ReportClientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportClientDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportClientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
