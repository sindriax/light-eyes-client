import { Component } from '@angular/core';
import { ChecklistStepperComponent } from 'app/checklist/components/checklist-stepper/checklist-stepper.component';

@Component({
  selector: 'app-create-checklist',
  standalone: true,
  imports: [ChecklistStepperComponent],
  templateUrl: './create-checklist.component.html',
  styleUrl: './create-checklist.component.scss'
})
export class CreateChecklistComponent {

}
