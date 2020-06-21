import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myGroup: FormGroup;
  authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }
  errorMessage = '';
  successMessage = '';
  ngOnInit() {
    this.myGroup = new FormGroup({
      firstName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
   });
  }

  tryRegister(value){
    this.authService.doRegister(value)
    .then(res => {
    console.log(res);
    this.errorMessage = "";
    this.successMessage = "Your account has been created";
    }, err => {
    console.log(err);
    this.errorMessage = err.message;
    this.successMessage = "";
    })
   }

}
