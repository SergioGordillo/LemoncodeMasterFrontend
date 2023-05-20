import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService) {}

  checkLoggedIn() {
    this.authService.isLogged().subscribe((isLoggedIn) => {
      this.isLoggedIn$.next(isLoggedIn);
    });
  }
}
