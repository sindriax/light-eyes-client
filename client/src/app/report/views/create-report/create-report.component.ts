import { Component } from '@angular/core';
import { ReportStepperComponent } from 'app/report/components/report-stepper/report-stepper.component';

@Component({
  selector: 'app-create-report',
  standalone: true,
  imports: [ReportStepperComponent],
  templateUrl: './create-report.component.html',
  styleUrl: './create-report.component.scss'
})
export class CreateReportComponent {

}
