import { Component, inject, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChecklistAnswComponent } from '../checklist-answ/checklist-answ.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-checklist-ques',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ChecklistAnswComponent, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatButton, MatButtonModule,MatOptionModule],
  templateUrl: './checklist-ques.component.html',
  styleUrl: './checklist-ques.component.scss'
})
export class ChecklistQuesComponent {

  // interface question to be implemented

  @Input() questionForm!: FormGroup;
  @Input() questionNumber: number = 1;
  public questionCounter = 2;


  // injects FormBuilder service to be used on createAnswer for generating new dynamic FormGroups
  private fb = inject(FormBuilder);

  // gets all answers so you can iterate them at html
  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  // get answer form group
  getAnswerFormGroup(index: number): FormGroup {
    return this.answers.at(index) as FormGroup;
  }

  // adds new answer to questionForm FormGroup
  addAnswer(){
    this.answers.push( this.createAnswer() );
  }

  // generates new answer with formBuilder service
  createAnswer(): FormGroup {
    return this.fb.group({
      type: ['true'],
      content: ['']
    });
  }
// removes answers

removeAnswer(index: number): void {
  const answers = this.questionForm.get('answers') as FormArray;
  answers.removeAt(index);
}
  
}
