import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
@Input () id!: string;

ngOnInit(): void {
  console.log(this.id)
}
}
