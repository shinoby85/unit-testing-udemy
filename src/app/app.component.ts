import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MathService, ParserService, ValidationService} from './shared';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unit-testing-udemy';
  @ViewChild('result', {read: ElementRef}) divElem!: ElementRef<HTMLDivElement>;

  validationService = inject(ValidationService);
  mathService = inject(MathService);
  parserService = inject(ParserService);

  formSubmitHandler(form: HTMLFormElement, event: MouseEvent) {
    event.preventDefault();
    const formData = new FormData(form);
    const numberInputs = this.parserService.extractNumbers(formData);

    let result = '';

    try {
      const numbers = [];
      for (const numberInput of numberInputs) {
        this.validationService.validateStringNotEmpty(numberInput);
        const number = this.mathService.transformToNumber(numberInput);
        this.validationService.validateNumber(number);
        numbers.push(number);
      }
      result = this.mathService.add(numbers).toString();
    } catch (error: any) {
      result = error.message;
    }

    let resultText = '';

    if (result === 'invalid') {
      resultText = 'Invalid input. You must enter valid numbers.';
    } else if (result !== 'no-calc') {
      resultText = 'Result: ' + result;
    }

    this.divElem.nativeElement.textContent = resultText;
  }

}
