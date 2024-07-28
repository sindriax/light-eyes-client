import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import {
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
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
    MatRadioModule,
    MatSelectModule,
    JsonPipe,
  ],
  templateUrl: './report-basic-data.component.html',
  styleUrls: ['./report-basic-data.component.scss'],
})
export class ReportBasicDataComponent {
  @Output() formReady = new EventEmitter<FormGroup>();
  //  reportForm: FormGroup;
  formBasicData = signal<FormGroup>(
    new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      language: new FormControl('', Validators.required),
      search: new FormControl('', Validators.required),
    })
  );

  constructor(private _formBuilder: FormBuilder, private fb: FormBuilder) {
    // this.reportForm = this.fb.group({
      // report: this.fb.array([this.createReport()])
    // });
  }


  languages = [
    { value: 'catala-0', viewValue: 'Català' },
    { value: 'castellano-1', viewValue: 'Castellano' },
  ];
}
 // formBasicData = this.fb.group({
  //   name: ['', Validators.required],
  //   description: ['', Validators.required],
  //   type: ['', Validators.required],
  //   language: ['', Validators.required],
  //   search: ['', Validators.required],
  // });

  // get report() {
  //   return this.formBasicData.get('name') as FormArray;
  // }
  // get description() {
  //   return this.formBasicData.get('description') as FormControl;
  // }
  // get typet() {
  //   return this.formBasicData.get('type') as FormControl;
  // }
  // get language() {
  //   return this.formBasicData.get('language') as FormControl;
  // }
  // get checkList() {
  //   return this.formBasicData.get('search') as FormControl;
  // }

  // addReport(){
  //   this.reportForm.push(this.createReport());
  // }

  // formBasicData = new FormGroup({
  //   "name": new FormControl("", Validators.required),
  //   "description": new FormControl("", Validators.required),
  //   "type": new FormControl("", Validators.required),
  //   "language": new FormControl("", Validators.required),
  //   "search": new FormControl("", Validators.required),
  // });

  // getReportFormGroup(index: number): FormGroup {
  //   return this.question.at(index) as FormGroup;
  // }

  // createReport(): FormGroup{
  //   return this.fb.group({
  //     content:[""],
  //     answers: this.fb.array([
  //       this.createReport(),
  //       this.createReport()
  //     ])
  //   })
  // }

  // addReport(){
  //   this.reportForm.push(this.createReport());
  // }