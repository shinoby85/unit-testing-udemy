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
  })
});
