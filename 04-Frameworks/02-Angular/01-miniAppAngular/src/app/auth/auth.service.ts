import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './interfaces/user.interface';
import { Observable, defaultIfEmpty, map, of } from 'rxjs';

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
    console.log('Hace el logout del servicio');
    this.router.navigate(['./']);
    localStorage.clear();
  }

  isLogged(): Observable<boolean> {
    return this.getUserCredentials().pipe(
      map((credentials) => !!credentials.username),
      defaultIfEmpty(false)
    );
  }

  getUserName() {
    return this.username;
  }

  getUserCredentials(): Observable<User> {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    return of({ username, password });
  }
}
