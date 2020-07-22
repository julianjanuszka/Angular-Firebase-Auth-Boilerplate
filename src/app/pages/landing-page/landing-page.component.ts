import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Router } from '@angular/router';
import { UserDataModel } from '../../models/UserData.model';
import { PostService, Post } from '../../services/post.service';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { UserService } from '../../services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
	readonly loggedInUser$ = this.store.select('loggedInUser');

	public loggedInUser: UserDataModel;
	public user;
	public userPosts;
	constructor(
		protected authService: AuthService, 
		protected store: Store<AppState>, 
		protected router: Router,
		protected postService: PostService,
		protected userService: UserService,
		protected db: AngularFireDatabase,
		private afAuth: AngularFireAuth) {
	}

	ngOnInit() {
		this.authService.loggedInUser();
		// this.loggedInUser$
		// 	.pipe()
		// 	.subscribe(loggedInUser => {
		// 		this.loggedInUser = loggedInUser[0];
		// 	});
		this.afAuth.authState.subscribe(user => {
            if(user) this.user = user;
			console.log('Jul USERSTATE ', user);
			this.db.list(`/posts/${this.user.uid}`).valueChanges()
			.subscribe(list => {
				this.userPosts = list;
				console.log('Jul LIST ', list);
			})
        })
		console.log('Jul onInit ', this.user.uid);
		
		
	}

	postThought(thought: string) {
		window.alert(thought);
		let post: Post = {
			body: thought,
		};
		this.postService.createPost(post)
	}
}


