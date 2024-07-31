import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatTab, MatTabGroup, MatTabLabel } from '@angular/material/tabs';
import { AuthService } from 'app/core/services/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import {
  MatDialog
} from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { DialogComponent } from 'app/core/components/dialog/dialog.component';

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
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  authService = inject(AuthService);
  router = inject(Router);
  matcher = new CustomErrorStateMatcher();
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      // firstName: ['', Validators.required],
      // lastName: [''],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/), Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });
  }

  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  submit() {
    console.log( "submit pressed" );
    this.submitted = true;
    if (this.registerForm.valid) {
      const newUser = {
        userName: this.registerForm.value.username,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      };
      console.log(newUser);

      this.authService.register(newUser).subscribe(
        response => {
          console.log('Registration successful:', response);
          this.openDialog();
          this.router.navigateByUrl('');
          this.resetForm();
        },
        error => console.error('Registration error:', error)
      );
    }
  }

  resetForm() {
    this.registerForm.reset();
    this.submitted = false;
  }
}