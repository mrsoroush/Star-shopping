import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
             boolean | Observable<boolean> | Promise<boolean>{
              return this.loginService.isAuthenticated().then(
                (auth: boolean) => {
                  if(auth) {
                    return true;
                  } else {
                    this.router.navigate(['/login']);
                    return false;
                  }
                });
  }
}
