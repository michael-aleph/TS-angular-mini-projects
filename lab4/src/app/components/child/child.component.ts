import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges {
  @Input() numbersArray: number[] = [];
  difference: number | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['numbersArray']) {
      this.calculateDifference();
    }
  }

  private calculateDifference() {
    if (this.numbersArray.length > 0) {
      const max = Math.max(...this.numbersArray);
      const min = Math.min(...this.numbersArray);
      this.difference = max - min;
    } else {
      this.difference = null;
    }
  }
}
