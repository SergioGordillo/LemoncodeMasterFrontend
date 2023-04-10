import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'master8@lemoncode.net' && password === '12345678') {
      this.router.navigate(['./pages']);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('master8@lemoncode.net');
    this.router.navigate(['./']);
  }

  isLogged() {
    if (localStorage.getItem('master8@lemoncode.net') !== null) {
      this.isLoggedIn = true;
      console.log('Me coge el token bien');
      return true;
    } else {
      return false;
    }
  }

  getUserName() {
    //Además, tengo que modificar el getUsername que ahora mismo no lo estoy usando
    return this.username;
  }

  // getUsername(): string
}
