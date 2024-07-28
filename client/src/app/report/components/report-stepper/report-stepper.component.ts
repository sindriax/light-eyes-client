import { Component, Input, model, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
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
import { ReportBasicDataComponent } from "./report-basic-data/report-basic-data.component";
import { ReportControlDataComponent } from "./report-control-data/report-control-data.component";
import { ReportClientDataComponent } from "./report-client-data/report-client-data.component";
import { ReportContentComponent } from "./report-content/report-content.component";
import { ReportPreviewComponent } from "./report-preview/report-preview.component";

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
    MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule,
    ReportBasicDataComponent,
    ReportControlDataComponent,
    ReportClientDataComponent,
    ReportContentComponent,
    ReportPreviewComponent
],
  templateUrl: './report-stepper.component.html',
  styleUrl: './report-stepper.component.scss',
})
export class ReportStepperComponent  implements OnInit{
sendForm() {
throw new Error('Method not implemented.');
}
  @Input() report!: Report[];
  // filteredReport: Report[] = [];
  reportIds: number[] = [];
  
  formBasicData = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.getAllReport().subscribe(
      (data: Report[]) => {
        this.report = data;
        this.reportIds = data.map(report => report.id);
      },
      (error: any) => {
        console.error('error fetching check lists', error);
      }
    );
  }

  readonly checked = model(false);
  readonly indeterminate = model(false);
  readonly labelPosition = model<'before' | 'after'>('after');
  readonly disabled = model(false);


}
