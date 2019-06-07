import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', //Selecting case the element has a atribute name correspondent
  // selector: '.app-servers', //Selecting case the element has a atribute name correspondent
  // template: `
  //               <app-server></app-server>
  //               <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreatingStatus = 'No server was created!';
  serverName = 'TesteServer';
  serverCreated = false;
  servers = ['North American Server', 'South American Server'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatingStatus = 'Just one test Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
