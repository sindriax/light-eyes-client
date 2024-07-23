import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Report } from 'app/shared/models/reports';


@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.scss'
})
export class ReportCardComponent {
@Input() report!:Report
}
