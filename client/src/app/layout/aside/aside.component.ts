import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import  {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

}
