// import { ActivatedRouteSnapshot, Router, Resolve } from '@angular/router';

// @Injectable({
//     providedIn:  'root'
// })
// export class ProfileResolver implements Resolve {

//   constructor(public userService: UserService, private router: Router) { }

//   resolve(route: ActivatedRouteSnapshot) : Promise {

//     let user = new FirebaseUserModel();

//     return new Promise((resolve, reject) => {
//       this.userService.getCurrentUser()
//       .then(res => {
//         if(res.providerData[0].providerId == 'password'){
//           user.image = 'user-profile-url.png';
//           user.name = res.displayName;
//           user.provider = res.providerData[0].providerId;
//           return resolve(user);
//         }
//         else{
//           user.image = res.photoURL;
//           user.name = res.displayName;
//           user.provider = res.providerData[0].providerId;
//           return resolve(user);
//         }
//       }, err => {
//         this.router.navigate(['/login']);
//         return reject(err);
//       })
//     })
//   }
// }
