import { Component, ComponentFactoryResolver, ComponentRef, inject, ViewChild, ViewContainerRef } from '@angular/core';
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
  @ViewChild('answerContainer', { read: ViewContainerRef }) answerContainer!: ViewContainerRef;
  @ViewChild('initialQuestion', { read: ChecklistQuestionComponent }) initialQuestion!: ChecklistQuestionComponent;


  private _formBuilder = inject(FormBuilder)
  private generartorChecklistService = inject(GeneratorChecklistService)
  private viewContainerRef: ViewContainerRef;
  public questionCounter = 2;
  private questionComponents: ChecklistQuestionComponent[] = [];


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
  name: '',
  description: '',

}
  isLinear = false;

  ngAfterViewInit() {
    this.initialQuestion.questionNumber = 1;
    this.questionComponents.push(this.initialQuestion);
  }

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

  addNewQuestion() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChecklistQuestionComponent);
    const componentRef = this.questionContainer.createComponent(componentFactory);
    const instance = componentRef.instance as ChecklistQuestionComponent;
    instance.questionNumber = this.questionCounter;
    this.questionComponents.push(instance);
    this.questionCounter++;
  }

  addNewAnswer() {
    const lastQuestionComponent = this.questionComponents[this.questionComponents.length - 1];
    if (lastQuestionComponent) {
      lastQuestionComponent.addNewAnswer();
    }
  }
}
