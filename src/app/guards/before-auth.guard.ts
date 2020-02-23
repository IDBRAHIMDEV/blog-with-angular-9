import { TokenService } from './../services/token.service';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeforeAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService, 
    private tokenService: TokenService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       
       if(!this.tokenService.loggedIn()) {
          this.router.navigateByUrl('/login');
          this.tokenService.remove();
          this.authService.changeAuthStatus(false);
          return false;
       }

       return true;
  }
  
}
