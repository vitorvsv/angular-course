import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'practiceDirective',
  templateUrl : './practice-directive.component.html'
})

export class PracticeDirectiveComponent implements OnInit {

  display = false;
  displayLogs = [];

  ngOnInit(): void {

  }

  toggle() {
    this.displayLogs.push(this.getDisplayValue());
    this.display = !this.display;

    console.log(this.displayLogs);
  }

  getDisplayValue() {
    return (this.display) ? 'block' : 'none';
  }


  toInteger = (item, key) => {
    // return parseInt(key) + 1;
    return key;
  }


}
