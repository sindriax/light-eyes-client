import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingUsersTableComponent } from './pending-users-table.component';

describe('PendingUsersTableComponent', () => {
  let component: PendingUsersTableComponent;
  let fixture: ComponentFixture<PendingUsersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingUsersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
