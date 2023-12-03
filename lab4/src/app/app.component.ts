import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  enteredNumbers: number[] = [];
  title: any;

  onNumbersEntered(event: number[]) {
    this.enteredNumbers = event;
  }
}
