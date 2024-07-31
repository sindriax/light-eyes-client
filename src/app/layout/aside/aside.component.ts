import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import  {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { AuthService } from 'app/core/services/auth.service';


@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatButtonModule, MatSidenavModule, MatNavList, RouterOutlet, MatIcon],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
  public authService = inject(AuthService);
  
  constructor() {}

  onLogout() {
    this.authService.logout();
  }
}
