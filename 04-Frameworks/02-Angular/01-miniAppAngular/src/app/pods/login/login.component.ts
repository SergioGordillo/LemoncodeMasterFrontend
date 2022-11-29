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
  correct: boolean | undefined = undefined;

  constructor(private fb: FormBuilder) {}

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

  login() {
    const { username, password } = this.myForm.value;

    if (username == 'master8@lemoncode.net' && password == '12345678') {
      console.log(this.myForm.value);
      this.correct = true;
      this.myForm.reset();
    } else {
      this.correct = false;
      console.log('error');
    }
  }
}

//TODO: use the service in the component and simplify my code
