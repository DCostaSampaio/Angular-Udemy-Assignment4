import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment-4';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalCalled(numberSent : number) {
    if (numberSent % 2 === 0) {
      this.evenNumbers.push(numberSent);
    } else {
      this.oddNumbers.push(numberSent);
    }
  }
}
