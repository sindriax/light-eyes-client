import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'app/core/services/auth.service';
import { UserLogin } from 'app/shared/models/user';
import { Router } from '@angular/router';
import { MatTab, MatTabGroup, MatTabLabel } from '@angular/material/tabs';
import { RegisterComponent } from "../register/register.component";
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatTabGroup, MatTabLabel, MatTab, RegisterComponent, MatFormField, MatLabel, MatHint, MatError, MatInputModule, MatButton],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]
})


export class LoginComponent implements OnInit{
  private authService = inject(AuthService)
  private formBuilder= inject(FormBuilder)
  router = inject(Router);
  loginForm!:FormGroup;
  matcher = new CustomErrorStateMatcher();


  ngOnInit(): void {

    this.loginForm=this.formBuilder.group({
      username: ["", Validators.required],
      password:["",Validators.required]
    });
  }

  // get usernameFormControl() {
  //   return this.loginForm.get('username');
  // }

  submit(){
    const user:UserLogin={
      userName:this.loginForm.controls["username"].value,
      password:this.loginForm.controls["password"].value,
    }
    if(this.loginForm.valid){
      console.log("pass1");
      const logResult = this.authService.login(user).subscribe(r=>{
        this.router.navigateByUrl('')
      });

      console.log("logResult",logResult)
      console.log("pass2",user)
    }
  };
}
