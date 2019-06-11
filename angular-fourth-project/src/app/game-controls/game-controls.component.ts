import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.css']
})

export class GameControlsComponent implements OnInit {

  protected run = false;
  protected counter = 0;
  protected ref;

  numbers = [2];

  constructor() { }

  ngOnInit() {
  }

  startRun() {
    this.run = true;
    this.runCounter();
  }
  
  stopRun() {
    this.run = false;
    this.runCounter();
  }

  runCounter() {
    if (this.run) {

      this.ref = setInterval(self => { 
        self.counter++;
        console.log(self.counter); 
      }, 1000, this);

      // this.ref = setInterval(function(counter) {
      //   counter++;
      //   console.log(counter);
      // }, 1000, this.counter);

    } else {
      clearInterval(this.ref);
    }
  }

}
