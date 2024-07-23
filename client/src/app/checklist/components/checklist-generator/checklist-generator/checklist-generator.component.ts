import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { GeneratorChecklistService } from 'app/checklist/services/generator-checklist.service';
import { ChecklistQuestionComponent } from "../../checklist-question/checklist-question.component";
import { ChecklistAnswerComponent } from "../../checklist-answer/checklist-answer.component";


@Component({
  selector: 'app-checklist-generator',
  standalone: true,
  imports: [MatInputModule, MatStepperModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatSelectModule, FormsModule, ChecklistQuestionComponent, ChecklistAnswerComponent],
  templateUrl: './checklist-generator.component.html',
  styleUrl: './checklist-generator.component.scss'
})
export class ChecklistGeneratorComponent {

  languages = [
    {value: 'catala-0', viewValue: 'Català'},
    {value: 'castellano-1', viewValue: 'Castellano'},
  ];


  private generartorChecklistService = inject(GeneratorChecklistService)
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  checklistDescriptionForm2 = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}
