import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @Output() numbersEntered = new EventEmitter<number[]>();
  numbersInput = '';

  onNumbersEntered() {
    const numbersArray = this.numbersInput.split(',').map(num => +num.trim());
    this.numbersEntered.emit(numbersArray);
  }
}
