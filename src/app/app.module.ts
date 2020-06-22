import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule }  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterComponent } from './register/register/register.component';
import { StoreModule } from '@ngrx/store';
import { addUserModel } from './reducers/user.reducer';
import * as firebase from 'firebase';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandingPageComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    StoreModule.forRoot({loggedInUser: addUserModel})


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
