import { Component, computed, inject, model, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { GeneratorChecklistService } from 'app/checklist/services/generator-checklist.service';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];}

@Component({
  selector: 'app-checklist-editor1',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule],
  templateUrl: './checklist-editor1.component.html',
  styleUrl: './checklist-editor1.component.scss'
})


export class ChecklistEditorComponent  {
 


  readonly labelPosition = model<'before' | 'after'>('after');
  checklistData: any = {}; 
  selectedOptions: { [key: string]: string } = {};
  description: string = '';
  title: string = '';
  language: string = '';


private generatorService = inject(GeneratorChecklistService)
ngOnInit() {
  this.generatorService.checklistData$.subscribe(data => {
    this.checklistData = data;
    if (data) {
      this.description = data.description;
      this.title = data.name;
      this.language = data.language;
    }
  });

  this.generatorService.selectedOptions$.subscribe(options => {
    this.selectedOptions = options;
  });
}

onOptionSelected(questionContent: string, selectedOption: string) {
  this.generatorService.setSelectedOption(questionContent, selectedOption);
};
/*   private generatorService = inject(GeneratorChecklistService)
  task: any; */
/* 
  ngOnInit() {
    this.generatorService.getById(1).subscribe(data => {
      if (data) {
        this.task = {
          name: data.checkListItems[0].content,
          completed: false,
          subtasks: data.checkListItems[0].checkListItemOptions.map(option => ({
            name: option.content,
            completed: option.isPositive
          }))
        };
      }
    });
  }

  updateTask(completed: boolean, index?: number) {
    if (!this.task) return;

    if (typeof index === 'undefined') {
      this.task.completed = completed;
      this.task.subtasks.forEach(t => t.completed = completed);
    } else {
      this.task.subtasks[index].completed = completed;
      this.task.completed = this.task.subtasks.every(t => t.completed);
    }
  } */
}
// rspuesta 1 
/*   task: Task | undefined;
  partiallyComplete = () => {
    const task = this.task;
    if (!task?.subtasks) {
      return false;
    }
    return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
  };
  ngOnInit() {
    this.generatorService.getById(1).subscribe(data => {
      if (data) {
        this.task = {
          name: data.checkListItems[0].content,
          completed: false,
          subtasks: data.checkListItems[0].checkListItemOptions.map(option => ({
            name: option.content,
            completed: option.isPositive
          }))
        };
      }
    });
  }
  update(completed: boolean, index?: number) {
    if (!this.task) return;
    
    if (index === undefined) {
      this.task.completed = completed;
      this.task.subtasks.forEach(t => (t.completed = completed));
    } else {
      this.task.subtasks[index].completed = completed;
      this.task.completed = this.task.subtasks.every(t => t.completed);
    }

    
  }
}
  */



