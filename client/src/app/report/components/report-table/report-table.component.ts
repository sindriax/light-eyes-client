import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ReportService } from 'app/report/services/report.service';
import { Report } from 'app/shared/models/reports';

@Component({
  selector: 'app-report-table',
  standalone: true,
  imports: [MatCardModule, MatIcon, RouterLink, MatTableModule, MatInputModule],
  templateUrl: './report-table.component.html',
  styleUrl: './report-table.component.scss',
})
export class ReportTableComponent implements OnInit {
  @Input() report!: Report[];
  filteredReport: Report[] = [];

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.getAllReport()
    .subscribe(
      (data: Report[]) => {
        this.report = data;
        this.filteredReport = this.report;
      },
      (error: any) => {
        console.error('error fetching check lists', error);
      }
    );
  }

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'content',
    'type',
    'createdDate',
    'language',
    'clientId',
    'client',
  ];
  reportSource = this.report;
}
