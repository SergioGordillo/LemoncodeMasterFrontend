import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user?: User;
  username: string | undefined = '';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'master8@lemoncode.net' && password === '12345678') {
      this.username = 'master8@lemoncode.net';
      localStorage.setItem(username, password);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.username = undefined;
    localStorage.removeItem('master8@lemoncode.net');
  }

  isLogged(): boolean {
    if (!localStorage.getItem('master8@lemoncode.net')) {
      return false;
    } else {
      return true;
    }
  }
  getUserName() {
    return this.username;
  }
}
