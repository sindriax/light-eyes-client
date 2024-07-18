import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'app/core/services/auth.service';
import { User } from 'app/shared/models/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  authService = inject(AuthService)

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          // Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          // Validators.pattern(/^[a-zA-Z0-9]+$/)
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