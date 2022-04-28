import {Injectable} from '@angular/core';
import {AbstractControl, ValidatorFn} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {
  emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  phoneRegex = RegExp(
    /^\+84\d{9,10}$/
  );

  constructor() {
  }

  validEmailFn() {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = this.emailRegex.test(control.value);
      return valid ? null : { invalidEmail: true };
    };

  }

  validatePhoneFn() {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = this.phoneRegex.test(control.value);
      return valid ? null : {invalidPhone: true};
    };
  }

  patternValidator(regExp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = regExp.test(control.value);
      return valid ? null : {invalidPassword: true};
    };
  }

}
