import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  // canActivate(): Promise<boolean>{
  //   return new Promise((resolve, reject) => {
  //     this.userService.getCurrentUser()
  //     .then(user => {
  //       this.router.navigate(['/profile']);
  //       return resolve(false);
  //     }, err => {
  //       return resolve(true);
  //     })
  //   })
  // }
  canActivate() {
    return true;
  }
}
