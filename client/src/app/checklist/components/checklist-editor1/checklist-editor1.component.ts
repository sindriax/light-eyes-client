import { Component, computed, inject, model, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute } from '@angular/router';
import { GeneratorChecklistService } from 'app/checklist/services/generator-checklist.service';
import { CheckList, CheckListItemOption } from 'app/shared/models/checklist';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];}

@Component({
  selector: 'app-checklist-editor1',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule, MatIconModule],
  templateUrl: './checklist-editor1.component.html',
  styleUrl: './checklist-editor1.component.scss'
})


export class ChecklistEditorComponent implements OnInit {
 
  readonly labelPosition = 'after';
  checklistData: CheckList | undefined;
  selectedOptions: { [key: string]: string } = {};
  description: string = '';
  title: string = '';
  language: string = '';

private generatorService = inject(GeneratorChecklistService)
private route = inject(ActivatedRoute)
ngOnInit() {
  this.loadChecklist();
}

loadChecklist() {
  const exampleData: CheckList = {
    checkListId: 1,
    name: 'Sample Checklist',
    description: 'This is a sample checklist.',
    language: 'en',
    createdDate: '2023-07-30',
    checkListItems: [
      {
        checkListItemId: 1,
        content: 'Question 1',
        checkListId: 1,
        checkListItemOptions: [
          { checkListItemOptionId: 1, content: 'Option 1.1', isPositive: true, checkListItemId: 1 },
          { checkListItemOptionId: 2, content: 'Option 1.2', isPositive: false, checkListItemId: 1 }
        ]
      },
      {
        checkListItemId: 2,
        content: 'Question 2',
        checkListId: 1,
        checkListItemOptions: [
          { checkListItemOptionId: 3, content: 'Option 2.1', isPositive: true, checkListItemId: 2 },
          { checkListItemOptionId: 4, content: 'Option 2.2', isPositive: false, checkListItemId: 2 }
        ]
      }
    ]
  };
      // Asignamos los datos de ejemplo para simular la respuesta del servicio
      this.checklistData = exampleData;
      this.description = exampleData.description;
      this.title = exampleData.name;
      this.language = exampleData.language;
    }

/*   const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.generatorService.getSavedCheckListById(id).subscribe(
      (data: CheckList) => {
        this.checklistData = data;
        if (data) {
          this.description = data.description;
          this.title = data.name;
          this.language = data.language;
        }
      },
      error => {
        console.error('Error fetching checklist data', error);
      }
    );
  } 
}*/
 onOptionSelected(questionContent: string, selectedOption: string) {
  this.selectedOptions[questionContent] = selectedOption;
  // Aquí puedes llamar a algún servicio para manejar el cambio si es necesario
} 

isPositive(option: CheckListItemOption): boolean {
  return option.isPositive;
}
}
