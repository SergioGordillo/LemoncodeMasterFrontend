import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username: string = '';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'master8@lemoncode.net' && password === '12345678') {
      this.router.navigate(['./pages']);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.router.navigate(['./']); 
  }

  isLogged() {} //TODO: I need local storage persistence to implement this method

  getUserName() {
    return this.username;
  }

  // getUsername(): string
}
