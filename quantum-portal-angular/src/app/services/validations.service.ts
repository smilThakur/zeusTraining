import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  phoneNumberValidation(phoneNumber: string): boolean {
    const pattern = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;

    if (phoneNumber.length <= 10) {
      return false;
    }
    if (!phoneNumber) {
      return false;
    }
    if (pattern.test(phoneNumber)) {
      return true;
    } else {
      return false;
    }
  }

  validateEmail(email: string) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {

      return true;

    }
    return false
  }


  constructor() { }
}
