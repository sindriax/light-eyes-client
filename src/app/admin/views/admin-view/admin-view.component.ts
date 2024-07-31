import { Component } from '@angular/core';
import { PendingUsersTableComponent } from 'app/admin/components/pending-users-table/pending-users-table.component';

@Component({
  selector: 'app-admin-view',
  standalone: true,
  imports: [PendingUsersTableComponent],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.scss'
})
export class AdminViewComponent {

}
