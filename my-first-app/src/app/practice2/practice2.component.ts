import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component implements OnInit {

  username = '';

  constructor() { }

  ngOnInit() {

  }

  isEmpty() {

    if (this.username.length > 0) {
      return true;
    }

    return false;
  }

  clearUsername() {
    this.username = '';
  }

}
