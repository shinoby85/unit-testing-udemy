import {inject, Injectable} from '@angular/core';
import {ValidationService} from './validation.service';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  validationService = inject(ValidationService);

  add(numbers: any[]): number {
    let sum = 0;

    for (const number of numbers) {
      sum += +number;
    }
    return sum;
  }

  transformToNumber(value: any): number {
    return +value;
  }

  calculateResult(numberInputs: any) {
    try {
      const numbers = this.cleanNumbers(numberInputs);
      return this.add(numbers).toString();
    } catch (error: any) {
      return error.message;
    }
  }

  cleanNumbers(numberInputs: any) {
    const numbers = [];
    for (const numberInput of numberInputs) {
      this.validationService.validateStringNotEmpty(numberInput);
      const number = this.transformToNumber(numberInput);
      this.validationService.validateNumber(number);
      numbers.push(number);
    }
    return numbers;
  }
}
