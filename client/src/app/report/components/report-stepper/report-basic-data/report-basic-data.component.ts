import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-report-basic-data',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  templateUrl: './report-basic-data.component.html',
  styleUrls: ['./report-basic-data.component.scss']
})
export class ReportBasicDataComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  languages = [
    { value: 'catala-0', viewValue: 'Català' },
    { value: 'castellano-1', viewValue: 'Castellano' },
  ];

}
