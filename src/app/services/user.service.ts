import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'


@Injectable({
    providedIn: 'root'
})
export class UserService {

    public user;
    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(user => {
            if(user) this.user = user;
            console.log('Jul USERSTATE ', user);
        })
    }

    userEmail(): string {
        if (this.user) {
            return this.user.email;
        }
    }

    userUid(): string {
        if (this.user) {
            return this.user.email;
        }
    }
}