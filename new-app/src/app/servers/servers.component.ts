import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  selector: '[app-servers]',
  //selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onUpdateServerName(event: Event) {
    //  triggered with every keystroke
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

}
