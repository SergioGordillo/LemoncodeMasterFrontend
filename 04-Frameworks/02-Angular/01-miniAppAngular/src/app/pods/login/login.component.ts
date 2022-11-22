import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // myForm: FormGroup = new FormGroup({
  //   "username" : new FormControl(),
  //   "password": new FormControl()
  // })

  constructor(private fb: FormBuilder) {}

  // username = new FormControl('', [Validators.required]);

  myForm: FormGroup = this.fb.group({
    username: ['student', [Validators.required, Validators.minLength(5)]],
    password: ['12345', [Validators.required, Validators.minLength(5)]],
  });

  // getErrorMessage() {
  //   if (this.username.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.username.hasError('email') ? 'Not a valid email' : '';
  // }

  login() {
    const { username, password } = this.myForm.value;

    if (username == 'student' && password == '12345') {
      console.log('ok');
    } else {
      console.log('error');
    }
  }

  isValid() {
    return (
      this.myForm.controls['username'].errors &&
      this.myForm.controls['username'].touched
    );
  }
}
