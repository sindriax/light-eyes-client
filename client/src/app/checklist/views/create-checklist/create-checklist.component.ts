import { Component } from '@angular/core';
import { ChecklistGeneratorComponent } from "../../components/checklist-generator/checklist-generator/checklist-generator.component";

@Component({
  selector: 'app-create-checklist',
  standalone: true,
  imports: [ChecklistGeneratorComponent],
  templateUrl: './create-checklist.component.html',
  styleUrl: './create-checklist.component.scss'
})
export class CreateChecklistComponent {

}
