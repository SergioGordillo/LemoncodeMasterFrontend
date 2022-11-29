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

  correct : boolean | undefined = undefined;

  constructor(private fb: FormBuilder) {}

  myForm: FormGroup = this.fb.group({
    username: ['student', [Validators.required, Validators.minLength(5)]],
    password: ['12345', [Validators.required, Validators.minLength(5)]],
  });

  isValid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  login() {
    const { username, password } = this.myForm.value;

    if (username == 'student' && password == '12345') {
      console.log(this.myForm.value);
      this.correct=true;
      this.myForm.reset();
    } else {
      this.correct=false;
      console.log('error');
    }
  }
}
