import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss'],
})
export class PrivateHeaderComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  get username(): string | undefined {
    return this.authService.username;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['./']);
  }
}
