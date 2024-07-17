import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'app/core/services/auth.service';
import { LocalStorageService } from 'app/core/services/local-storage.service';
import { User } from 'app/shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{
  private loginService = inject(AuthService)
  private formBuilder= inject(FormBuilder)
  loginForm!:FormGroup;

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  submit(){
    const user:User={
      email:this.loginForm.controls["email"].value,
      password:this.loginForm.controls["password"].value,
    }
    if(this.loginForm.valid){
      console.log("pass1");
      const logResult = this.loginService.login(user);

      console.log("logResult",logResult)
      console.log("pass2",user)
    }
  }

}