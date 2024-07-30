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
import { ReportControlData } from 'app/shared/models/reports';

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
  fb = inject(FormBuilder);
  @Input() reportForm!: FormGroup;

  controlDataFormGroup!: FormGroup;

  ngOnInit(): void {

    this.controlDataFormGroup = this.fb.group({
      reviewDate: new FormControl('', Validators.required),
      createdBy: new FormControl('', Validators.required),
      validatedBy: new FormControl('', Validators.required),
      reviewedBy: new FormControl('', Validators.required),
      documentCode: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
    });

    this.reportForm?.addControl('controlData', this.controlDataFormGroup);
  }

}
