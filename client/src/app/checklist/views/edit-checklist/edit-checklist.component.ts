import { Component } from '@angular/core';
import { ChecklistCardComponent } from "../../components/checklist-table/checklist-card.component";

@Component({
  selector: 'app-edit-checklist',
  standalone: true,
  imports: [ChecklistCardComponent],
  templateUrl: './edit-checklist.component.html',
  styleUrl: './edit-checklist.component.scss'
})
export class EditChecklistComponent {

}
