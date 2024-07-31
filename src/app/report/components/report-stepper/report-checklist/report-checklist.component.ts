import { Component, effect, Input, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { CheckList, CheckListItemOption } from 'app/shared/models/checklist';

@Component({
  selector: 'app-report-checklist',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule, MatIconModule],
  templateUrl: './report-checklist.component.html',
  styleUrl: './report-checklist.component.scss'
})
export class ReportChecklistComponent {
  @Input() checkList!: WritableSignal<CheckList>;
  selectedOptions: { [key: string]: number } = {};

  constructor(){
    effect( () => {
      console.log( this.checkList() );
    });
  }

  onOptionSelected(questionContent: string, selectedOptionId: number) {
    this.selectedOptions[questionContent] = selectedOptionId;
  }

  getReportCheckListItems() {
    return this.checkList().checkListItems.map(question => {
      return {
        checkListItemId: question.checkListItemId,
        reportCheckListItemOptions: question.checkListItemOptions.map(option => {
          return {
            checkListItemOptionId: option.checkListItemOptionId,
            isSelected: this.selectedOptions[question.content] === option.checkListItemOptionId
          };
        })
      };
    });
  }

  isPositive(option: CheckListItemOption): boolean {
    return option.isPositive;
  }

  consoleArrayData(){
    console.log( this.getReportCheckListItems() );
  }

}
