import {beforeEach, describe, expect, it} from 'vitest';
import {HttpError, ValidationError} from "./errors";

describe('ValidationError', () => {
  const testMessage = 'Test message';
  let testClass;
  beforeEach(() => {
    testClass = new ValidationError(testMessage);
  })
  it('should be initial if has property', () => {
    expect(testClass.message).toBe(testMessage);
  });
  it('should has message property after initialize with message', () => {
    expect(testClass.message).not.toBeUndefined();
  });
  it('should be undefined if no property', () => {
    testClass = new ValidationError();
    expect(testClass.message).toBeUndefined();
  });
});
describe('HttpError', () => {
  const testMessage = 'Test message';
  const statusCode = 200;
  const data = 'some data';
  it('should contain the provided status code, message and data', () => {
    const obj = new HttpError(statusCode, testMessage, data);
    expect(obj.statusCode).toBe(statusCode);
    expect(obj.message).toBe(testMessage);
    expect(obj.data).toBe(data);
  });
  it('should have initial statusCode and message if no data (the data is undefined)', () => {
    const obj = new HttpError(statusCode, testMessage);
    expect(obj.statusCode).toBe(statusCode);
    expect(obj.message).toBe(testMessage);
    expect(obj.data).toBeUndefined();
  })
  it('should has init only statusCode if no message and data (the message and data are undefined)', () => {
    const obj = new HttpError(statusCode);
    expect(obj.statusCode).toBe(statusCode);
    expect(obj.message).toBeUndefined();
    expect(obj.data).toBeUndefined();
  })
  it('should have all property are undefined if no init params', () => {
    const obj = new HttpError();
    expect(obj.statusCode).toBeUndefined();
    expect(obj.message).toBeUndefined();
    expect(obj.data).toBeUndefined();
  });
  it('should have all property', () => {
    const obj = new HttpError();
    expect(obj.statusCode).toBeUndefined();
    expect(obj.message).toBeUndefined();
    expect(obj.data).toBeUndefined();
  })
})
