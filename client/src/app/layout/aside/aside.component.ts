import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import  {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';


@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatButtonModule, MatSidenavModule, MatNavList, RouterOutlet],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

}
