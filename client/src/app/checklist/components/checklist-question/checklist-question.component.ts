import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-checklist-question',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule],
  templateUrl: './checklist-question.component.html',
  styleUrl: './checklist-question.component.scss'
})
export class ChecklistQuestionComponent {



 signselectors= [
    {value: 'affirmative-3', viewValue: 'YES'},
    {value: 'negative-4', viewValue: 'NO'},
 
  ]


}
