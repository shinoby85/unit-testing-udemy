import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  validateStringNotEmpty(value: any) {
    if ((value as string).trim().length === 0) {
      throw new Error('Invalid input - must not be empty.');
    }
  }

  validateNumber(number: any) {
    if (isNaN(number) || typeof number !== 'number') {
      throw new Error('Invalid number input.');
    }
  }
}
