import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-report-client-data',
  standalone: true,
  imports: [MatFormFieldModule,  ReactiveFormsModule, FormsModule, MatInputModule ],
  templateUrl: './report-client-data.component.html',
  styleUrl: './report-client-data.component.scss'
})
export class ReportClientDataComponent implements OnInit {
  fb = inject(FormBuilder);
  @Input() reportClientData!: FormGroup;
  clientDataFormGroup!: FormGroup;

ngOnInit(): void {
  this.clientDataFormGroup = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    companyName: new FormControl('', Validators.required),
    area: new FormControl('', Validators.required),
    contactEmail: new FormControl('', Validators.required),
    contactPhone: new FormControl('', Validators.required),
  });

  this.reportClientData?.addControl("clientData", this.clientDataFormGroup);
  console.log(this.reportClientData);
  }

  consoleData() {
    console.log(this.reportClientData);
  }

}
