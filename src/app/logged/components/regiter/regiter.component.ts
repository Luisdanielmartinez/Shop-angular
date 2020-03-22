import { User } from './../../../models/user.model';
import { LoginService } from './../../../ServiceGeneral/LoginService/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.css']
})
export class RegiterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginServicer: LoginService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    });
  }
  async createUser() {
    await this.loginServicer.createUser(this.registerForm.value.userName,
      this.registerForm.value.userEmail, this.registerForm.value.userPassword);
  }

}
