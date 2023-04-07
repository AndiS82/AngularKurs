import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //statt template Url kann man hier auch ein eigenes template wählen. Template ist mandatory!
  templateUrl: './servers.component.html',
  // template:"<app-server></app-server>",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = "No Server was created!";
  serverName = "Testserver";
  serverCreated = false;
  servers = ["Testserver", "New Server"];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer =true
    }, 2000);
  }
  ngOnInit(){
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name: " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
