import {TestBed} from '@angular/core/testing';

import {MathService} from './math.service';
import {beforeEach, describe, expect, it} from 'vitest';

describe('[ Math Service ]:', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should summarize all number values in an array', () => {
    //Arrange
    const numArr = [1, 2, 3];
    const sum = numArr.reduce((prev, curr) => prev + curr, 0)
    //Act
    const result = service.add(numArr);
    //Assert
    expect(result).toBe(sum)
  });
  it('should yield NaN if a list one invalid number is provided', () => {
    const input = ['invalid', 1];
    const result = service.add(input);
    expect(result).toBeNaN();
  });
  it('should yield a correct sum if an array of numeric string values is provided', () => {
    const input = ['1', '2'];
    const result = service.add(input);
    const expectedResult = input.reduce((prev, curr) => prev + +curr, 0);
    expect(result).toBe(expectedResult);
  });
});
