import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-checklist-answer',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatSelectModule, MatIconModule],
  templateUrl: './checklist-answer.component.html',
  styleUrl: './checklist-answer.component.scss'
})
export class ChecklistAnswerComponent {


 signselectors= [
  {value: 'affirmative-2', viewValue: 'YES'},
  {value: 'negative-3', viewValue: 'NO'},
]
}
