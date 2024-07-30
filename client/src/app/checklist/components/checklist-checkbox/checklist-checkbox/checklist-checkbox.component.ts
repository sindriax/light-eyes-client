import { JsonPipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChecklistService } from 'app/checklist/services/checklist.service';
// import { ChecklistItem } from 'app/shared/models/checklist';

@Component({
  selector: 'app-checklist-checkbox',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe],
  templateUrl: './checklist-checkbox.component.html',
  styleUrl: './checklist-checkbox.component.scss'
})
export class ChecklistCheckboxComponent {
  // @Input() checkListitem!: ChecklistItem[];

  private readonly _formBuilder = inject(FormBuilder);

  // constructor( private checklistItemService: ChecklistService) {    
  // }
  // ngOnInit(): void {
  //   this.checklistItemService.https.get.subscribe(
  //     (data: ChecklistItem[]) => {
  //       this.checkListitem = data;
        
  //     },
  //     (error: any)=>{
  //       console.error('error fetching check lists', error);
  //     }
  //   );
  // }

  readonly toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
}
