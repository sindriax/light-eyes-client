import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
@Output() answerAdded = new EventEmitter<any>();
newanswerForm: FormGroup;

constructor(private fb: FormBuilder) {
  this.newanswerForm = this.fb.group({
    answer: ['', Validators.required],
    signselector: ['', Validators.required]
  });
}

onSubmit() {
  if (this.newanswerForm.valid) {
    this.answerAdded.emit(this.newanswerForm.value);
    this.newanswerForm.reset();
  }
}
}
