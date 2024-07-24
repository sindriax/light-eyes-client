import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Checklist } from 'app/shared/models/checklist';

@Component({
  selector: 'app-checklist-card',
  standalone: true,
  imports: [MatCardModule, MatIcon],
  templateUrl: './checklist-card.component.html',
  styleUrl: './checklist-card.component.scss'
})
export class ChecklistCardComponent {
  @Input() checklist!:Checklist

}
