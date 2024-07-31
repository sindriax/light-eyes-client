import { Component, effect, inject, Input, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { ReportService } from 'app/report/services/report.service';
import { Report } from 'app/shared/models/reports';
import { ReportBasicDataComponent } from './report-basic-data/report-basic-data.component';
import { ReportControlDataComponent } from './report-control-data/report-control-data.component';
import { ReportClientDataComponent } from './report-client-data/report-client-data.component';
import { ReportContentComponent } from './report-content/report-content.component';
import { ReportPreviewComponent } from './report-preview/report-preview.component';
import { ReportChecklistComponent } from './report-checklist/report-checklist.component';
import { ChecklistService } from 'app/checklist/services/checklist.service';
import { CheckList } from 'app/shared/models/checklist';

@Component({
  selector: 'app-report-stepper',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    ReportBasicDataComponent,
    ReportControlDataComponent,
    ReportClientDataComponent,
    ReportContentComponent,
    ReportPreviewComponent,
    ReportChecklistComponent,
  ],
  templateUrl: './report-stepper.component.html',
  styleUrl: './report-stepper.component.scss',
})
export class ReportStepperComponent implements OnInit {
  @Input() report!: Report[];
  reportForm: FormGroup;
  reportIds: number[] = [];
  checkListId = signal<number>(0);
  checkList = signal<CheckList>({
    checkListId: 0,
    name: '',
    description: '',
    language: '',
    createdDate: '',
    checkListItems: []
  });

  checkListService = inject(ChecklistService);

  constructor(private fb: FormBuilder, private reportService: ReportService) {
    this.reportForm = this.fb.group({});

    effect(() => {

      // checklist has been set
      if(this.checkListId() > 0){
        // request checklist
        this.checkListService.getSavedCheckListById(this.checkListId()).subscribe( (checklistResponse) => {
          this.checkList.set(checklistResponse);
        });
      }

    });
  }

  ngOnInit(): void {
    this.reportService.getAllReport().subscribe(
      (data: Report[]) => {
        this.report = data;
        this.reportIds = data.map((report) => report.id);
      },
      (error: any) => {
        console.error('error fetching check lists', error);
      }
    );
  }

  handleFormSubmit() {
    console.log(this.reportForm.value);
  }
}
