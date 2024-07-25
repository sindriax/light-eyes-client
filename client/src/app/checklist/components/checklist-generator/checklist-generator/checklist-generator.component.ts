import { Component, ComponentFactoryResolver, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { GeneratorChecklistService } from 'app/checklist/services/generator-checklist.service';
import { ChecklistQuestionComponent } from "../../checklist-question/checklist-question.component";
import { ChecklistAnswerComponent } from "../../checklist-answer/checklist-answer.component";
import { Checklist } from 'app/shared/models/checklist';
import { MatIcon } from '@angular/material/icon';



@Component({
  selector: 'app-checklist-generator',
  standalone: true,
  imports: [MatInputModule, MatStepperModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatSelectModule, FormsModule, ChecklistQuestionComponent, ChecklistAnswerComponent, MatIcon],
  templateUrl: './checklist-generator.component.html',
  styleUrl: './checklist-generator.component.scss'
})
export class ChecklistGeneratorComponent {

  @ViewChild('questionContainer', { read: ViewContainerRef }) questionContainer!: ViewContainerRef;

  private _formBuilder = inject(FormBuilder)
  private generartorChecklistService = inject(GeneratorChecklistService)
  // constructor(private _formBuilder: FormBuilder) {}
  // private viewContainerRef = inject (ViewContainerRef)

  private viewContainerRef: ViewContainerRef;


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    viewContainerRef: ViewContainerRef
  ) {
    this.viewContainerRef = viewContainerRef;
  }



  languages = [
    {value: 'catala-0', viewValue: 'Català'},
    {value: 'castellano-1', viewValue: 'Castellano'},
  ];

  checklistForm!: FormGroup;
  submitted = false;

  titleForm1 = this._formBuilder.group({
  language: ['', Validators.required],
  firstCtrl: ['', Validators.required],
  });
  checklistDescriptionForm2 = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

newChecklist: Checklist={
  language: '',
  checklistTitle: '',
  checklistDescription: '',

}
  isLinear = false;

  onSubmit(){
    const newChecklist = {
      language: this.titleForm1.value.language,
      checklistTitle: this.titleForm1.value.firstCtrl,
      checklistDescription: this.checklistDescriptionForm2.value.secondCtrl,
    }

    this.generartorChecklistService.saveChecklist(this.newChecklist).subscribe(
      response => {
        console.log('Checklist saved successfully', response);
      },
      error => {
        console.error('Error saving checklist', error);
      }
    )
  }

  public questionCounter = 2;

  addNewQuestion() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChecklistQuestionComponent);
    const componentRef = this.questionContainer.createComponent(componentFactory);
    componentRef.instance.questionNumber = this.questionCounter;
    this.questionCounter++;
  }


  // XAVI's CODE
//   addtionalQuestions: number[] = [];

// public questionCounter = 1;


//   signselectors= [
//     {value: 'affirmative-3', viewValue: 'Yes'},
//     {value: 'negative-4', viewValue: 'No'},
//   ]


  addNewAnswer(){
    this.viewContainerRef.createComponent(ChecklistAnswerComponent)
  }

//   addNewQuestion(){
//     if (this.questionCounter === 1){
//       this.viewContainerRef.createComponent(ChecklistQuestionComponent); 
//       this.addtionalQuestions.push(this.questionCounter);
//     }
//     this.questionCounter++;
//   }

}
