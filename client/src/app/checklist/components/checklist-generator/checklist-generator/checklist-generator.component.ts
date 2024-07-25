import { Component, inject } from '@angular/core';
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



@Component({
  selector: 'app-checklist-generator',
  standalone: true,
  imports: [MatInputModule, MatStepperModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatSelectModule, FormsModule, ChecklistQuestionComponent, ChecklistAnswerComponent],
  templateUrl: './checklist-generator.component.html',
  styleUrl: './checklist-generator.component.scss'
})
export class ChecklistGeneratorComponent {


  private generartorChecklistService = inject(GeneratorChecklistService)
  constructor(private _formBuilder: FormBuilder) {}

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
}
