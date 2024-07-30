import { Component, inject, Input, OnInit, Output, signal } from '@angular/core';
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
import { Report, ReportControlData } from 'app/shared/models/reports';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-report-control-data',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './report-control-data.component.html',
  styleUrl: './report-control-data.component.scss',
})
export class ReportControlDataComponent implements OnInit {
  private reportService = inject(ReportService);
  filteredReports = signal<ReportControlData[]>([]);
  fb = inject(FormBuilder);
  @Input() reportForm!: FormGroup;
  // @Output() formSubmit = new EventEmitter<ReportControlData>(); 

  controlDataFormGroup!: FormGroup;

  ngOnInit(): void {
    this.reportService.getAllReportControlData().subscribe((data) => {
      this.filteredReports.set(data);
    });

    this.controlDataFormGroup = this.fb.group({
      reviewDate: new FormControl('', Validators.required),
      createdBy: new FormControl('', Validators.required),
      validatedBy: new FormControl('', Validators.required),
      reviewedBy: new FormControl('', Validators.required),
      documentCode: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
    });

    this.reportForm?.addControl('controlData', this.controlDataFormGroup);
    console.log(this.reportForm);
  }

  // submitForm() {  // Añade esto
  //   const formValue = {
  //     reviewDate: this.controlDataFormGroup.value.reviewDate as string,
  //     createdBy: this.controlDataFormGroup.value.createdBy as string,
  //     validatedBy: this.controlDataFormGroup.value.validatedBy as string,
  //     reviewedBy: this.controlDataFormGroup.value.reviewedBy as string,
  //     documentCode: this.controlDataFormGroup.value.documentCode as string,
  //     department: this.controlDataFormGroup.value.department as string,
  //   };
  //   this.formSubmit.emit(formValue);
  //   console.log(formValue);
  // }

  consoleData() {
    console.log(this.reportForm);
    console.log(this.filteredReports());
  }
}
