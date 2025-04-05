import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  validateStringNotEmpty(value: FormDataEntryValue) {
    if ((value as string).trim().length === 0) {
      throw new Error('Invalid input - must not be empty.');
    }
  }

  validateNumber(number: number) {
    if (isNaN(number)) {
      throw new Error('Invalid number input.');
    }
  }
}
