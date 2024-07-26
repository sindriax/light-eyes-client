import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ChecklistService } from 'app/checklist/services/checklist.service';
import { Checklist } from 'app/shared/models/checklist';


@Component({
  selector: 'app-checklist-table',
  standalone: true,
  imports: [MatCardModule, MatIcon, RouterLink, MatTableModule, MatInputModule],
  templateUrl: './checklist-table.component.html',
  styleUrl: './checklist-table.component.scss',
})


export class ChecklistCardComponent implements OnInit{
  @Input() checklist!: Checklist[];
  filteredCheckList: Checklist[] = [];
  

  constructor( private checklistService: ChecklistService) {    
  }

  ngOnInit(): void {
    this.checklistService.getAllChecklist().subscribe(
      (data: Checklist[])=>{
        this.checklist = data;
        this.filteredCheckList = this.checklist;
      },
      (error: any)=>{
        console.error('error fetching check lists', error);
      }
    );
  }

  displayedColumns: string[] = ['checkListId', 'name', 'description', 'language', 'creationDate'];
  checkListSource = this.checklist;

  // onSearch(filteredCheckList: Checklist[]){
  //   filteredCheckList = filteredCheckList;
  // }
}

