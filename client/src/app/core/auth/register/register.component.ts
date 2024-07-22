import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatTab, MatTabGroup, MatTabLabel } from '@angular/material/tabs';
import { AuthService } from 'app/core/services/auth.service';
import { User } from 'app/shared/models/user';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatLabel, MatTabLabel, MatTabGroup, MatTab, MatFormField, MatError, MatHint, MatInputModule, MatButton],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  authService = inject(AuthService)
  matcher = new CustomErrorStateMatcher(); 


  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^[a-zA-Z0-9]+$/)
        ]
      ]
    });
  }

  submit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        response => {
      alert('You have successfully signed up.');
        }    
    )
    } else {
      alert('Please correct the errors in the form.');
    }
  }
  

  resetForm() {
    this.registerForm.reset();
    this.submitted = false;
  }
}