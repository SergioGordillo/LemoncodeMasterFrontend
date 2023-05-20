import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  UrlSegment,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanMatch, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  private checkAuthStatus(): boolean | Observable<boolean> {
    let isAuthenticated = this.authService.isLogged();

    if (!isAuthenticated) {
      this.router.navigate(['./login']);
      return false;
    } else {
      return true;
    }
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }
}
