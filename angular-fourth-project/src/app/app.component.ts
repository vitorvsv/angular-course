import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'angular-fourth-project';

  evenNumbers = [];
  oddNumbers = [];

  onIntervalFired(number: number) {
    if (number % 2 == 0) {
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }
  }

}
