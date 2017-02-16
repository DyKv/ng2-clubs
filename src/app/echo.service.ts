import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class EchoService {

  echo: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  send(message: string) {
    this.echo.emit(message);
  }

}
