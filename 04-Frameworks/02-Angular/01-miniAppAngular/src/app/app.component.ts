import { Component } from '@angular/core';
import { AuthService } from './pods/login/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'miniAppAngular'; //TODO: Idk if im using this or not

  isLoggedIn: boolean = false;

  constructor(private authService:AuthService) {}

  ngOnInit() {
    this.checkLoggingStatus();
  }

  checkLoggingStatus() {
    this.authService.isLogged();
  }
}
