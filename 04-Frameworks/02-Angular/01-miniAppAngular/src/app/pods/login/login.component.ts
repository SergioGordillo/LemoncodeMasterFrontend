import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  correct: boolean | undefined = undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  myForm: FormGroup = this.fb.group({
    username: [
      'master8@lemoncode.net',
      [Validators.required, Validators.minLength(5), Validators.email],
    ],
    password: ['12345678', [Validators.required, Validators.minLength(5)]],
  });

  isValid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  onLogin(): void {
    const { username, password } = this.myForm.value;

    this.authService.login(username, password);
    this.myForm.reset();
  }
}
