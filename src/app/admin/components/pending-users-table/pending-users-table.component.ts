import { Location } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AdminService } from 'app/admin/services/admin.service';
import { PendingUser } from 'app/shared/models/auth';

@Component({
  selector: 'app-pending-users-table',
  standalone: true,
  imports: [MatTableModule, MatButton, MatButtonModule],
  templateUrl: './pending-users-table.component.html',
  styleUrl: './pending-users-table.component.scss'
})
export class PendingUsersTableComponent implements OnInit {
  private location = inject(Location);
  adminService = inject(AdminService);
  pendingUsers = signal<PendingUser[]>([]);
  displayedColumns: string[] = ['id', 'userName', 'email', 'isActive', 'activateUser'];

  ngOnInit(): void {
    this.adminService.getAllPendingUsers().subscribe( users => {
      console.log(users);
      this.pendingUsers.set(users);
    });
  }

  activateUser(userId: string){
    this.adminService.activateUser(userId).subscribe( data => {
      console.log('User activated', data);
      this.location.go(this.location.path());
      window.location.reload();
    } );
  }
}
