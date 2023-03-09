import { Component, EventEmitter, Output } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalCalled = new EventEmitter<number>();
  interval;
  number = 0;


  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalCalled.emit(this.number + 1)
      this.number++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }

}
