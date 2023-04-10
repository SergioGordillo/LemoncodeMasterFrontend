import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../pods/login/auth/auth.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss'],
})
export class PrivateHeaderComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
