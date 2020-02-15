import { LoginService } from './../../../ServiceGeneral/LoginService/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder:FormBuilder,private loginService:LoginService) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      userEmail: ['',[Validators.required,Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    })
  }
  async SingIn(){
     this.loginService.LoginIn(this.loginForm.value.userEmail,this.loginForm.value.userPassword);
  }
}
