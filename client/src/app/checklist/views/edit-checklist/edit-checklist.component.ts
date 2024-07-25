import { Component } from '@angular/core';
import { ChecklistCardComponent } from "../../components/checklist-table/checklist-card.component";
import { ChecklistCheckboxComponent } from "../../components/checklist-checkbox/checklist-checkbox/checklist-checkbox.component";

@Component({
  selector: 'app-edit-checklist',
  standalone: true,
  imports: [ChecklistCardComponent, ChecklistCheckboxComponent],
  templateUrl: './edit-checklist.component.html',
  styleUrl: './edit-checklist.component.scss'
})
export class EditChecklistComponent {

}
