import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormArray, AbstractControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { ChecklistQuesComponent } from "../checklist-ques/checklist-ques.component";
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { GeneratorChecklistService } from 'app/checklist/services/generator-checklist.service';
@Component({
  selector: 'app-checklist-stepper',
  standalone: true,
  imports: [MatButtonModule,MatStepperModule,FormsModule, ReactiveFormsModule,MatFormFieldModule, MatInputModule, ChecklistQuesComponent,MatIconModule, MatSelectModule],
  templateUrl: './checklist-stepper.component.html',
  styleUrl: './checklist-stepper.component.scss'
})
export class ChecklistStepperComponent {

  public questionCounter = 2;
  isLinear = false;


  checkListForm: FormGroup;
  // injects formBuilder service and initializes the checklist Form Group with a Form Array with one Question
  constructor(private fb: FormBuilder, private generatorService: GeneratorChecklistService) {
    this.checkListForm = this.fb.group({
      description: ['', Validators.required],
      title: ['', Validators.required],
      language: ['', Validators.required],
      questions: this.fb.array([ this.createQuestion() ])
    });
  }
  // get all questions so you can iterate through at html
  get questions() {
    return this.checkListForm.get('questions') as FormArray;
  }
  // get question form group
  getQuestionFormGroup(index: number): FormGroup {
    //1 linea añadida
    const questions = this.checkListForm.get('questions') as FormArray
    return this.questions.at(index) as FormGroup;
  }
  // generates new question
  createQuestion(): FormGroup {
    return this.fb.group({
      content: [''],
      answers: this.fb.array([
        this.createAnswer(),
        this.createAnswer()
      ])
    });
  }
  // generates new answer
  createAnswer(): FormGroup {
    return this.fb.group({
      type: ['true'],
      content: ['']
    });
  }
// 
removeQuestion(index: number): void {
  const questions = this.checkListForm.get('questions') as FormArray;
  questions.removeAt(index);
}

  // event that adds new question to checklistFormGroup
  addQuestion(){
    const questions = this.checkListForm.get('questions') as FormArray; 
    this.questions.push(this.createQuestion());
    console.log( this.checkListForm );
  }
  // Send to endpoint all data for backend api to generate checklist template
  saveChecklist() {
    const questions = this.checkListForm.get('questions') as FormArray;
  
    const formattedChecklistItems = questions.controls.map((questionControl: AbstractControl) => {
      const questionGroup = questionControl as FormGroup;
      const questionValue = questionGroup.value;
      return {
        content: questionValue.content,
        checkListItemOptions: questionValue.answers.map((answer: any) => ({
          content: answer.content,
          isPositive: answer.type === 'true'
        }))
      };
    });
  
    const checklistData = {
      name: this.checkListForm.value.title,
      description: this.checkListForm.value.description,
      language: this.checkListForm.value.language,
      createdDate: new Date().toISOString(),
      checkListItems: formattedChecklistItems
    };
  
    console.log(checklistData);
  }
  
}
