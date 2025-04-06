import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MathService, ParserService} from './shared';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unit-testing-udemy';
  @ViewChild('result', {read: ElementRef}) divElem!: ElementRef<HTMLDivElement>;


  mathService = inject(MathService);
  parserService = inject(ParserService);

  public formSubmitHandler(form: HTMLFormElement, event: MouseEvent) {
    event.preventDefault();
    const numberValues = this.parserService.extractEnteredNumberValues(form);

    let result = this.mathService.calculateResult(numberValues);
    let resultText = this.generateResultText(result);

    this.outputResult(resultText);
  }


  public outputResult(resultText: string) {
    this.divElem.nativeElement.innerText = resultText;
  }

  public generateResultText(result: any) {
    let resultText = '';

    if (result === 'invalid') {
      resultText = 'Invalid input. You must enter valid numbers.';
    } else if (result !== 'no-calc') {
      resultText = 'Result: ' + result;
    }
    return resultText;
  }


}
