import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-report-control-data',
  standalone: true,
  imports: [MatButtonModule, MatInputModule],
  templateUrl: './report-control-data.component.html',
  styleUrl: './report-control-data.component.scss'
})
export class ReportControlDataComponent {
  
}
