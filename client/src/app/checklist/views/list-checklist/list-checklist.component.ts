import { Component, inject, Input, NgModule, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ChecklistCardComponent } from '../../components/checklist-table/checklist-table.component';
import { BasicCheckList, CheckList } from 'app/shared/models/checklist';
import { ChecklistService } from 'app/checklist/services/checklist.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChecklistEditorComponent } from "../../components/checklist-editor1/checklist-editor1.component";

@Component({
  selector: 'app-list-checklist',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIcon,
    ChecklistCardComponent,
    AsyncPipe,
    RouterLink,
    ChecklistEditorComponent
],
  templateUrl: './list-checklist.component.html',
  styleUrl: './list-checklist.component.scss',
})
export class ListChecklistComponent implements OnInit {
  // private checklistService = inject(ChecklistService);
  // checklists = signal<BasicCheckList[]>([]);

  ngOnInit(): void {
    // this.checklists.set( this.checklistService.getAllChecklist() );
  }
}
