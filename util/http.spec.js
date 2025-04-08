import {expect, it, vi} from 'vitest';
import {sendDataRequest} from "./http";

const testResponseData = {testKey: 'testData'};
const testFetch = vi.fn((url, option) => {
  return new Promise((resolve, reject) => {
    if (typeof option.body !== 'string') {
      return reject('Not a string.');
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        })
      }
    }
    resolve(testResponse);
  })
});

vi.stubGlobal('fetch', testFetch);

it('should return any available response data', async () => {
  const testData = {key: 'test'};
  await expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it('should convert the provided data to JSON before sending the request', async () => {
  const testData = {key: 'test'};
  let errorMessage;
  try {
    await sendDataRequest(testData)
  } catch (error) {
    errorMessage = error;
  }
  expect(errorMessage).not.toBe('Not a string.');
});
