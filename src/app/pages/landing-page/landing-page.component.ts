import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Router } from '@angular/router';
import { UserDataModel } from '../../models/UserData.model';

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
	readonly loggedInUser$ = this.store.select('loggedInUser');

	public loggedInUser: UserDataModel;
	constructor(
		protected authService: AuthService, 
		protected store: Store<AppState>, 
		protected router: Router) {
	}

	ngOnInit() {
		this.authService.loggedInUser();
		this.loggedInUser$
			.pipe()
			.subscribe(loggedInUser => {
				this.loggedInUser = loggedInUser[0];
			});
	}
}


