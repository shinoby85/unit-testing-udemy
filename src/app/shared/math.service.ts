import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

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
}
