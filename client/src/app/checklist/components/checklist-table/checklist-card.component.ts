import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ChecklistService } from 'app/checklist/services/checklist.service';
import { Checklist } from 'app/shared/models/checklist';


@Component({
  selector: 'app-checklist-card',
  standalone: true,
  imports: [MatCardModule, MatIcon, RouterLink, MatTableModule, MatInputModule],
  templateUrl: './checklist-card.component.html',
  styleUrl: './checklist-card.component.scss',
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

  displayedColumns: string[] = ['id', 'name', 'dateTime', 'title', 'description', 'language'];
  checkListSource = this.checklist;

  // onSearch(filteredCheckList: Checklist[]){
  //   filteredCheckList = filteredCheckList;
  // }
}


// const ELEMENT_DATA: Checklist[] = [
//   {id: 1, creator: 'Hydrogen', creationDate: new Date ('02/02/2024'), checklistTitle: 'H', checklistDescription: '', language: 'es'},
//   {id: 2, creator: 'Helium', creationDate: new Date ('02/02/2024'), checklistTitle: 'He', checklistDescription: '', language: 'es'},
//   {id: 3, creator: 'Lithium', creationDate: new Date ('02/02/2024'), checklistTitle: 'Li', checklistDescription: '', language: 'es'},
//   {id: 4, creator: 'Beryllium', creationDate: new Date ('02/02/2024'), checklistTitle: 'Be', checklistDescription: '', language: 'es'},
//   {id: 5, creator: 'Boron', creationDate: new Date ('02/02/2024'), checklistTitle: 'B', checklistDescription: '', language: 'es'},
//   {id: 6, creator: 'Carbon', creationDate: new Date ('02/02/2024'),checklistTitle: 'C', checklistDescription: '', language: 'es'},
// ];
