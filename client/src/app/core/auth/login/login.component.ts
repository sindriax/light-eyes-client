import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'app/core/services/auth.service';
import { LocalStorageService } from 'app/core/services/local-storage.service';
import { User } from 'app/shared/models/user';
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
      email:["",Validators.required],
      password:["",Validators.required]
    });

    // const user = {
    //   userName: "TestUser2",
    //   email: "testuser1@test.com",
    //   password: "P@ssw0rd"
    // }

    // this.registerUser(user).then( res => {
    //   console.log( res );
    // } )
  }

  // async registerUser(data: any) {
  //   try {
  //     const response = await fetch('http://13.37.212.43/api/account/register', {
  //       method: 'POST',
  //       headers: {
  //         'accept': '*/*',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     });

  //     console.log('Request:', {
  //       method: 'POST',
  //       headers: {
  //         'accept': '*/*',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       console.error('Response Error:', errorData);
  //       throw new Error(`Error ${response.status}: ${errorData.message}`);
  //     }
  //     const responseData = await response.json();
  //     console.log('Registration successful:', responseData);
  //     return responseData;
  //   } catch (error) {
  //     console.error('Unexpected error:', error);
  //     throw error;
  //   }
  // }

  get emailFormControl() {
    return this.loginForm.get('email');
  }

  submit(){
    const user:User={
      email:this.loginForm.controls["email"].value,
      password:this.loginForm.controls["password"].value,
    }
    if(this.loginForm.valid){
      console.log("pass1");
      const logResult = this.authService.login(user).subscribe(r=>{
      //   localStorage.setItem('token', r.accessToken)
      this.router.navigateByUrl('/profile')
    });

      console.log("logResult",logResult)
      console.log("pass2",user)


    }
  }

  

}
