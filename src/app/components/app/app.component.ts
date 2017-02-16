import {Component} from '@angular/core';
import {EchoService} from "../../services/echo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Clubs';

  constructor(private echoService: EchoService) {
    echoService.echo.subscribe(title => this.onChangeTitle(title));
  }

  onChangeTitle(title: string): void {
    this.title = title;
  }

}
