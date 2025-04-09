import fs from 'fs';
import path from 'path';
import {beforeEach, expect, it, vi} from 'vitest';
import {showError} from "./dom";
import {Window} from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);
let errEl;
let testMessage = 'Test error message';

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDocumentContent);
  errEl = document.getElementById('errors');
})

it('should add an error paragraph to the id="errors" element', () => {
  showError(testMessage);
  const errParagraph = errEl.firstElementChild;

  expect(errParagraph).not.toBeNull();
});
it('should not contain an error paragraph initially', () => {
  const errParagraph = errEl.firstElementChild;

  expect(errParagraph).toBeNull();
});
it('should output the provided message in the error paragraph', () => {
  showError(testMessage);
  const errParagraph = errEl.firstElementChild;
  expect(errParagraph.textContent).toBe(testMessage);
});
