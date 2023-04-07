import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //array, weil hier mehrere stylesheets verwendet werden können
  // styleUrls: ['./app.component.css']
  // inline css geht auch
  styles: [`
  h3{
    color: dodgerblue;
  }`]

})
export class AppComponent {
  name = 'Andi';
}
