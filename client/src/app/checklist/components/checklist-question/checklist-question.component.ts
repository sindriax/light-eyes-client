import { Component, ComponentFactoryResolver, inject, Input, ViewChild, ViewContainerRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ChecklistAnswerComponent } from "../checklist-answer/checklist-answer.component";
@Component({
  selector: 'app-checklist-question',
  standalone: true,

  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, ChecklistAnswerComponent,  MatButton, MatButtonModule],

  templateUrl: './checklist-question.component.html',
  styleUrl: './checklist-question.component.scss'
})
export class ChecklistQuestionComponent {
  @ViewChild('answerContainer', { read: ViewContainerRef }) answerContainer!: ViewContainerRef;
  @Input() questionNumber: number = 1;
  public questionCounter = 2;

  // private viewContainerRef = inject (ViewContainerRef)

  private viewContainerRef: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    viewContainerRef: ViewContainerRef
  ) {
    this.viewContainerRef = viewContainerRef;
  }
addtionalQuestions: number[] = [];



// Hacer que el primero sea sí y la segunda no
  signselectors= [
    {value: 'affirmative-3', viewValue: 'Yes'},
    {value: 'negative-4', viewValue: 'No'},
  ]

  addNewAnswer() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChecklistAnswerComponent);
    this.answerContainer.createComponent(componentFactory);
  }

}
