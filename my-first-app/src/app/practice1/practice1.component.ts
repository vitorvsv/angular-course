import { Component, OnInit} from "@angular/core";

@Component({
  selector: 'practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})

export class Practice1Component  implements OnInit {

  username = '';

  constructor() { }

  ngOnInit() {

  }

  clicked() {
    this.username = '';
  }

}
