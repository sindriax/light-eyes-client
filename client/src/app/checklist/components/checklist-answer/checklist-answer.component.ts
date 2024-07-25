import { Component, EventEmitter, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-checklist-answer',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, ChecklistAnswerComponent,  MatButton, MatButtonModule],
  templateUrl: './checklist-answer.component.html',
  styleUrl: './checklist-answer.component.scss'
})
export class ChecklistAnswerComponent {

  @ViewChild('answerContainer', { read: ViewContainerRef }) answerContainer!: ViewContainerRef;


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

// addNewAnswer() {
//   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChecklistAnswerComponent);
//   this.answerContainer.createComponent(componentFactory);
// }
}
