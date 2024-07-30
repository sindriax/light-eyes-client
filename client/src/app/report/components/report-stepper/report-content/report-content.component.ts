import { Component, inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-report-content',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './report-content.component.html',
  styleUrl: './report-content.component.scss',
})
export class ReportContentComponent implements OnInit {
  fb = inject(FormBuilder);
  @Input() reportForm!: FormGroup;
  contentFormGroup!: FormGroup;

  ngOnInit(): void {
    this.contentFormGroup = this.fb.group({
      content: new FormControl('', Validators.required)
    });

    this.reportForm?.addControl('contentData', this.contentFormGroup);
    console.log(this.reportForm);
  }

  consoleData() {
    console.log(this.reportForm);
  }
}
