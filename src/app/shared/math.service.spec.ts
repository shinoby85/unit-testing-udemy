import {TestBed} from '@angular/core/testing';

import {MathService} from './math.service';
import {beforeEach, describe, expect, it} from 'vitest';

describe('[Math Service]:', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('[Add function] should summarize all number values in an array', () => {
    //Arrange
    const numArr = [1, 2, 3];
    const sum = numArr.reduce((prev, curr) => prev + curr, 0)
    //Act
    const result = service.add(numArr);
    //Assert
    expect(result).toBe(sum)
  });
  it('[Add function] should yield NaN if a list one invalid number is provided', () => {
    const input = ['invalid', 1];
    const result = service.add(input);
    expect(result).toBeNaN();
  });
  it('[Add function] should yield a correct sum if an array of numeric string values is provided', () => {
    const input = ['1', '2'];
    const result = service.add(input);
    const expectedResult = input.reduce((prev, curr) => prev + +curr, 0);
    expect(result).toBe(expectedResult);
  });
  it('[Add function] should yield 0 if an empty array is provided', () => {
    const input = [];
    const result = service.add(input);
    expect(result).toBe(0);
  });
  it('[Add function] should throw an error if no value is passed into the function', () => {
    const resultFn = () => {
      service.add();
    }
    expect(resultFn).toThrow();
  });
  it('[Add function] should throw an error if provided with multiple arguments instead of an array', () => {
    const resultFn = () => {
      service.add(1, 2);
    }
    expect(resultFn).toThrow(/numbers is not iterable/);
  });
  it('[transformToNumber function] should numeric value must be converted from a string to a number', () => {
    const result = service.transformToNumber('14');
    expect(result).toBeTypeOf('number');
  });
  it('[transformToNumber function] should yield NuN for non-transformable values', () => {
    const result1 = service.transformToNumber('test');
    const result2 = service.transformToNumber({});
    const result3 = service.transformToNumber();
    expect(result1).toBeNaN();
    expect(result2).toBeNaN();
    expect(result3).toBeNaN();
  });
  it('[transformToNumber function] should yield NaN if function doesn\'t have any arguments', () => {
    const result = service.transformToNumber();
    expect(result).toBeNaN();
  });
  it('[transformToNumber function] should yield 0 if function has empty string', () => {
    const result = service.transformToNumber('');
    expect(result).toBe(0);
  });
});

describe('cleanNumbers()', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2'];
    const cleanedNumbers = service.cleanNumbers(numberValues);
    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 2];
    const cleanFn = () => service.cleanNumbers(numberValues);
    expect(cleanFn).toThrow();
  });

})
