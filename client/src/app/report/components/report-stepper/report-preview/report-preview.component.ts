import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-report-preview',
  standalone: true,
  imports: [MatStepperModule, MatButtonModule],
  templateUrl: './report-preview.component.html',
  styleUrl: './report-preview.component.scss'
})
export class ReportPreviewComponent {
sendForm() {

}

}
