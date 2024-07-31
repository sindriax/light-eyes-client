import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ChecklistService } from 'app/checklist/services/checklist.service';
import { BasicCheckList } from 'app/shared/models/checklist';

@Component({
  selector: 'app-checklist-table',
  standalone: true,
  imports: [MatCardModule, MatIcon, RouterLink, MatTableModule, MatInputModule],
  templateUrl: './checklist-table.component.html',
  styleUrl: './checklist-table.component.scss',
})
export class ChecklistCardComponent implements OnInit {
  checkListService = inject(ChecklistService);
  checkList: BasicCheckList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.checkListService.getAllChecklist().subscribe((data) => {
      this.checkList = data;
    });

    console.log(this.checkList);
  }

  displayedColumns: string[] = [
    'checkListId',
    'name',
    'description',
    'language',
    'createdDate',
  ];
}
