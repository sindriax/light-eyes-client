import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { ReportService } from 'app/report/services/report.service';
import { Report } from 'app/shared/models/reports';
import { ReportBasicDataComponent } from './report-basic-data/report-basic-data.component';
import { ReportControlDataComponent } from './report-control-data/report-control-data.component';
import { ReportClientDataComponent } from './report-client-data/report-client-data.component';
import { ReportContentComponent } from './report-content/report-content.component';
import { ReportPreviewComponent } from './report-preview/report-preview.component';
import { ReportChecklistComponent } from './report-checklist/report-checklist.component';

@Component({
  selector: 'app-report-stepper',
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
    MatRadioModule,
    ReportBasicDataComponent,
    ReportControlDataComponent,
    ReportClientDataComponent,
    ReportContentComponent,
    ReportPreviewComponent,
    ReportChecklistComponent,
  ],
  templateUrl: './report-stepper.component.html',
  styleUrl: './report-stepper.component.scss',
})
export class ReportStepperComponent implements OnInit {
  @Input() report!: Report[];
  reportForm: FormGroup;

  reportIds: number[] = [];

  // isLinear = false;
  constructor(private fb: FormBuilder, private reportService: ReportService) {
    this.reportForm = this.fb.group({});

    console.log(this.reportForm);
    // console.log(this.reportFormData);
  }

  ngOnInit(): void {
    this.reportService.getAllReport().subscribe(
      (data: Report[]) => {
        this.report = data;
        this.reportIds = data.map((report) => report.id);
      },
      (error: any) => {
        console.error('error fetching check lists', error);
      }
    );
  }
// get reportFormBasicData(): FormGroup {

//   this.reportForm = {
//     name: this.reportForm.value.name as string,
//     description: this.reportForm.value.description as string,
//     type: this.reportForm.value.type as string,
//     language: this.reportForm.value.language as string,
//     checkList: this.reportForm.value.checkList as []
//   };
// }

  handleFormSubmit() {

  }
}
