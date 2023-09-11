import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonLabel1: string = '[propriedade]=';
  buttonLabel2: string = 'propriedade={{}}';
}
