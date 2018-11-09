import { Component } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private appService: AppService
  ) {}
  title = 'songOfZeDay-front';
  this.appService.pingSignal().subscribe()
}
