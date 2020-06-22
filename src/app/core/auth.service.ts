import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { UserDataModel } from '../models/UserData.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
	public afAuth: AngularFireAuth,
	public store: Store<AppState>, 
	protected router: Router){}
  
  doRegister(value){
	return new Promise((resolve, reject) => {
	  firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
	  .then(res => {
		resolve(res);
	  }, err => reject(err))
	})
  }

  doLogin(value) {
	return new Promise((resolve, reject) => {
	  firebase.auth().signInWithEmailAndPassword(value.email,value.password)
		.then(res => {
		  resolve(res);
		}, err => {
		  reject(err);
		})
	})
  }

  loggedInUser() {
	let coins = this.store.select('loggedInUser');
	console.log('JULIAN ', coins);
	coins.pipe().subscribe(
	  (data:any) => {
	  
	  console.log('JUL', data) //your data shows here
	  });
  }
  addUser(user: UserDataModel) {
	this.store.dispatch({
	  type: 'ADD_USER',
	  payload: user,
	});
	console.log(this.store);

  }

  clearUser() {
	this.store.dispatch({
	  type: 'ADD_USER',
	  payload: {},
	});
	console.log('Store cleared', this.store);
  }
  signOut() {
	return new Promise((resolve, reject) => {
	  firebase.auth().signOut()
	  .then(res => {
		this.clearUser();
		this.router.navigate(['']);
		resolve(res);
	  }, err => reject(err))
	})
  }
  getAuth() {
	return new Promise((resolve, reject) => {
	  firebase.auth().onAuthStateChanged((user) => {
		if (user) {
		  resolve(user);
		} else {
		  reject();
		}
	  });
	})
  }

  public computeUserModel(userAuthInfo: any): Promise<UserDataModel> {
	return new Promise(resolve => {
	  let modelData = new UserDataModel({
		  userEmail: userAuthInfo.user.email,
		  userPassword: 'foo',
	  })
	  resolve(modelData);
	});

  }


}
