import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsListViewComponent } from './reports-list-view.component';

describe('ReportsListViewComponent', () => {
  let component: ReportsListViewComponent;
  let fixture: ComponentFixture<ReportsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsListViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
