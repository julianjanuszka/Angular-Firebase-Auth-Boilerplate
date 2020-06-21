import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { UserDataModel } from 'src/app/models/UserData.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myGroup: FormGroup;
  authService: AuthService;
  store: Store<AppState>;
  constructor(authService: AuthService, store: Store<AppState>) {
    this.authService = authService;
    this.store = store;
  }
  errorMessage = '';
  successMessage = '';
  ngOnInit() {
    this.myGroup = new FormGroup({
      firstName: new FormControl(),
      email: new FormControl(),
      password: new FormControl,
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

  async tryLogin(value) {
    this.authService.doLogin(value)
      .then(res => {
        console.log(res);
        // this.authService.addUser();
        this.authService.computeUserModel(res)
          .then(res=> {
            this.authService.addUser(res);
            this.authService.loggedInUser();
          })
      }, err => {
        console.log(err);
      })
  }

}
