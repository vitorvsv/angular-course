import { 
  Component, 
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.css']
})

export class GameControlsComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  number = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  startRun() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.number);
      this.number++;
    }, 1000);
  }

  stopRun() {
    clearInterval(this.interval);
  }

}
