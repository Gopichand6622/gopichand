import {Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import 'assets/ext.js';

declare var myExtObject: any;
declare var webGlObject: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string;
  constructor() {
    this.name = 'Angular2';
    webGlObject.init();
  }

   CallFunction1() {
    myExtObject.func1();

  }
   CallFunction2() {
    myExtObject.func2();
  }
}



