import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,) {
    if (window.sessionStorage.getItem("logged")) {
      this.router.navigate(["/main-body"]);
      return false;
    } else {
      return true;
    }
  }
}
