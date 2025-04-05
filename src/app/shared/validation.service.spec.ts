import {TestBed} from '@angular/core/testing';

import {ValidationService} from './validation.service';
import {beforeEach, describe, expect, it} from 'vitest';

describe('[Validation Service]', () => {
  let service: ValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('[validateStringNotEmpty] should throw an error, if an empty string is provided', () => {
    const input = '';
    const validationFn = () => service.validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });

  it('[validateStringNotEmpty] should throw an error with a message that contains a reason (must not be empty)', () => {
    const input = '';
    const validationFn = () => service.validateStringNotEmpty(input);
    expect(validationFn).toThrow(/must not be empty/);
  });

  it('[validateStringNotEmpty] should throw an error if a long string of blanks is provided', () => {
    const input = '';
    const validationFn = () => service.validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });

  it('[validateStringNotEmpty] should throw an error if any other value than a string is provided', () => {
    const inputNum = 1;
    const inputBool = true;
    const inputObj = {};

    const validationFnNum = () => service.validateStringNotEmpty(inputNum);
    const validationFnBool = () => service.validateStringNotEmpty(inputBool);
    const validationFnObj = () => service.validateStringNotEmpty(inputObj);

    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });

  it('[validateStringNotEmpty] should not throw an error, if a non-empty string is provided', () => {
    const input = 'valid';
    const validationFn = () => service.validateStringNotEmpty(input);
    expect(validationFn).not.toThrow();
  });

  it('[validateNumber] should throw an error if NaN is provided', () => {
    const input = NaN;
    const validationFn = () => service.validateNumber(input);
    expect(validationFn).toThrow();
  });

  it('[validateNumber] should throw an error with a message that contains a reason (invalid number)', () => {
    const input = NaN;
    const validationFn = () => service.validateNumber(input);
    expect(validationFn).toThrow(/Invalid number/);
  });

  it('[validateNumber] should throw an error if a non-numeric value is provided', () => {
    const input = '1';
    const validationFn = () => service.validateNumber(input);
    expect(validationFn).toThrow();
  });

  it('[validateNumber] should not throw an error, if a number is provided', () => {
    const input = 1;
    const validationFn = () => service.validateNumber(input);
    expect(validationFn).not.toThrow();
  });
});
