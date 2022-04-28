import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidatorService} from '../../service/custom-validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm = new FormGroup({
      email: new FormControl('', [this.customValidator.validEmailFn()]),
      password: new FormControl('', [this.customValidator.validatePasswordStrengthFn()]),
      confirmPassword: new FormControl('', []),
      country: new FormControl('', []),
      age: new FormControl('', [Validators.min(18), Validators.max(130)]),
      gender: new FormControl('', []),
      phone: new FormControl('', [this.customValidator.validatePhoneFn()]),
    }
  );

  emailNotExist = false;
  wrongPassword = false;

  constructor(private customValidator: CustomValidatorService) {
  }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.registerForm.value);
    console.log(this.registerForm);
    this.fakeCallApi();
  }

  fakeCallApi() {
    this.emailControl.value !== 'luyt@gmail.com' ?
      this.emailNotExist = true : this.emailNotExist = false;
    this.passwordControl.value !== 'abc123' ?
      this.wrongPassword = true : this.wrongPassword = false;
    if (!this.emailNotExist && !this.wrongPassword) {
      alert('Login success');
    }
  }

  inputEmailOnFocus(){
    this.emailNotExist = false;
    this.wrongPassword = false;
  }

  get emailControl() {
    return this.registerForm.get('email');
  }

  get passwordControl() {
    return this.registerForm.get('password');
  }

}
