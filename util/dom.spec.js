import fs from 'fs';
import path from 'path';
import {expect, it, vi} from 'vitest';
import {showError} from "./dom";
import {Window} from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);

vi.stubGlobal('document', document);

it('should add an error paragraph to the id="errors" element', () => {
  showError('test');
  const errEl = document.getElementById('errors');
  const errParagraph = errEl.firstElementChild;

  expect(errParagraph).not.toBeNull();
});
