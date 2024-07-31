import { Component, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-checklist-answ',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButton, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule,],
  templateUrl: './checklist-answ.component.html',
  styleUrl: './checklist-answ.component.scss'
})
export class ChecklistAnswComponent {
  @Input() answerForm!: FormGroup;
}
