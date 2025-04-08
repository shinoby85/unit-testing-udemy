import {expect, it, vi} from 'vitest';
import {sendDataRequest} from "./http";
import {HttpError} from "./errors";

const testResponseData = {testKey: 'testData'};
let testFetch = vi.fn((url, option) => {
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

it('should throw an HttpError in case of non-ok responses', () => {
  testFetch.mockImplementationOnce((url, option) => {
    return new Promise((resolve, reject) => {
      const testResponse = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          })
        }
      }
      resolve(testResponse);
    })
  })
  const testData = {key: 'test'};

  return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
})
