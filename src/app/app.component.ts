import {Component, EventEmitter, Output, Input, OnInit} from '@angular/core';
import {EchoService} from "./echo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Clubs';

  constructor(private echoService: EchoService) {
    echoService.echo.subscribe(title => this.onChangeTitle(title));
  }

  onChangeTitle(title: string): void {
    console.log('onChangeTitle');
    this.title = title;
  }

}
