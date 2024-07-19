import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-checklist-generator',
  standalone: true,
  imports: [MatInputModule,MatStepperModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatSelectModule, FormsModule ],
  templateUrl: './checklist-generator.component.html',
  styleUrl: './checklist-generator.component.scss'
})
export class ChecklistGeneratorComponent {

  languages= [
    {value: 'castellano-0', viewValue: 'Castellano'},
    {value: 'catala-1', viewValue: 'Català'},
 
  ]


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}
