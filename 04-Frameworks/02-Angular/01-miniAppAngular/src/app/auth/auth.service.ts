import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './interfaces/user.interface';
import { Observable, of, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username: any = '';
  public userIsAuthenticated: boolean = false;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    localStorageService.getUserLoginValidation('username') ===
    'master8@lemoncode.net'
      ? (this.userIsAuthenticated = true)
      : (this.userIsAuthenticated = false);
  }

  login(username: string, password: string): boolean {
    if (username === 'master8@lemoncode.net' && password === '12345678') {
      this.username = 'master8@lemoncode.net';
      this.localStorageService.setUserLoginValidation(username, password);
      this.userIsAuthenticated = true;
      this.router.navigate(['./pages']);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.username = null;
    this.router.navigate(['./']);
    this.localStorageService.clear();
    this.userIsAuthenticated = false;
  }

  isLogged(): boolean {
    return this.userIsAuthenticated;
  }

  getUserName() {
    return this.getUserCredentials().pipe(
      tap((user: User) => {
        this.username = user.username;
      })
    );
  }

  getUserCredentials(): Observable<User> {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    return of({ username, password });
  }
}
