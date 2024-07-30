import { Component } from '@angular/core';
import { ReportStepperComponent } from "../../components/report-stepper/report-stepper.component";

@Component({
  selector: 'app-edit-report',
  standalone: true,
  imports: [ReportStepperComponent],
  templateUrl: './edit-report.component.html',
  styleUrl: './edit-report.component.scss'
})
export class PreviewReportComponent {

}
