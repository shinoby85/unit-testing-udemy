import {describe, expect, it} from "vitest";
import {validateNotEmpty} from "./validation";

describe('validateNotEmpty', () => {
  const testTextMessage = 'Test message';
  const testErrorMessage = 'ERROR message';
  it('should throw if first param is undefined', () => {
    const resultFn = () => {
      validateNotEmpty(null, testErrorMessage);
    }
    expect(resultFn).toThrow(testErrorMessage);
  });
  it('should be undefined if first params has text', () => {
    const result = validateNotEmpty(testTextMessage, testErrorMessage);
    expect(result).toBeUndefined;
  });
  it('should throw if text no letters', () => {
    const resultFn = () => {
      validateNotEmpty('', testErrorMessage);
    }
    expect(resultFn).toThrow(testErrorMessage);
  });
});
