import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReportService } from 'app/report/services/report.service';
import { ReportControlData } from 'app/shared/models/reports';

@Component({
  selector: 'app-report-control-data',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    JsonPipe,
    AsyncPipe,
  ],
  templateUrl: './report-control-data.component.html',
  styleUrl: './report-control-data.component.scss',
})
export class ReportControlDataComponent implements OnInit {
  private reportService = inject(ReportService);
  filteredReports = signal<ReportControlData[]>([]);
  fb = inject(FormBuilder);
  @Input() reportFormData!: FormGroup;
  controlDataFormGroup!: FormGroup;

  ngOnInit(): void {
    // this.reportService.getAllReportControlData().subscribe((data) => {
    //   this.filteredReports.set(data);
    // });

    this.controlDataFormGroup = this.fb.group({
      reviewDate: new FormControl('', Validators.required),
      createdBy: new FormControl('', Validators.required),
      validatedBy: new FormControl('', Validators.required),
      reviewedBy: new FormControl('', Validators.required),
      documentCode: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
    });

    this.reportFormData?.addControl('controlData', this.controlDataFormGroup);
    console.log(this.reportFormData);
  }

  // get checkListControl(): FormGroup {
  //   return this.controlDataFormGroup.get('report') as FormGroup;
  // }

  consoleData() {
    console.log(this.reportFormData);
    console.log(this.filteredReports());
  }
}
