import { Component, OnInit } from "@angular/core";
import { timestamp } from "rxjs";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styles: [`
    .online{
        color: white
    }
    /* Assignment 3 */
    .longerThanFive{
        color:  white
    }
    `]
})
// export class ServerComponent implements OnInit{
//     constructor() { }
//     ngOnInit() {
        
//     }
// }

export class ServerComponent {
    serverID = 10;
    serverStatus: string = " offline";
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    }
    username = "username";
    // Assignment 3
    buttonText = "Display Details";
    logsArray = [];
    togglesArray = [];
    displayTuna = false;
    
    getServerStatus() {
        return this.serverStatus;
    }

    onCreateUser() {
        this.username = ""
    }

    onUpdateUsername(event: Event) {
        this.username=(<HTMLInputElement>event.target).value
    }

    getColor() {
        return this.serverStatus === "online" ? "green" : "red";
    }

// Assignment 3
    
    showOrHide() {
        let log = new Date();
        let timeStamp = log.toDateString();
        this.buttonText === "Display Details" ? this.buttonText="Hide Details" : this.buttonText="Display Details";
        this.displayTuna === false ? this.displayTuna = true : this.displayTuna = false;
        if (this.displayTuna === true) {
            this.togglesArray.push(timeStamp)
        }
        this.logsArray.push(timeStamp);
        console.log(timeStamp);
        console.log(this.logsArray)
    }

    getBlue() {
        return this.logsArray.length >= 5 ? "blue" : "white";
    }

}