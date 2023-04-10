import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'miniAppAngular'; //TODO: Idk if im using this or not

  isLoggedIn: boolean = false;

  constructor() {}

  ngOnInit() {
    this.checkLoggingStatus();
  }

  checkLoggingStatus() {
    if (localStorage.getItem('master8@lemoncode.net') !== null) {
      this.isLoggedIn = true;
      console.log('Me coge el token bien');
    }
  }
}
