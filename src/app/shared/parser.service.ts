import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  extractNumbers(formData: FormData): [FormDataEntryValue, FormDataEntryValue] {
    const num1Input = formData.get('num1') as FormDataEntryValue;
    const num2Input = formData.get('num2') as FormDataEntryValue;

    return [num1Input, num2Input];
  }

  extractEnteredNumberValues(form: HTMLFormElement) {
    const formData = new FormData(form);
    const numberInputs = this.extractNumbers(formData);
    return numberInputs;
  }
}
