import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {IRegister} from '../../IRegister';
import {CustomValidatorService} from '../../service/custom-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('',
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    email: new FormControl('', [this.customValidator.validEmailFn()]),
    password: new FormControl('', []),
    confirmPassword: new FormControl('', []),
    country: new FormControl('', []),
    age: new FormControl('', [Validators.min(18)]),
    gender: new FormControl('', []),
    phone: new FormControl('', [this.customValidator.validatePhoneFn()]),
  });

  constructor(private customValidator: CustomValidatorService) {
  }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.registerForm.value);
    console.log(this.registerForm);
  }


  get usernameControl() {
    return this.registerForm.get('username');
  }

  get emailControl() {
    return this.registerForm.get('email');
  }

  get passwordControl() {
    return this.registerForm.get('password');
  }

  get confirmPasswordControl() {
    return this.registerForm.get('confirmPassword');
  }

  get countryControl() {
    return this.registerForm.get('country');
  }

  get genderControl() {
    return this.registerForm.get('gender');
  }

  get ageControl() {
    return this.registerForm.get('age');
  }
  get phoneControl() {
    return this.registerForm.get('phone');
  }

}
