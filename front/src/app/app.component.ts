import {Component, OnInit} from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private title: string;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.appService.pingSignal().subscribe(data => {
      console.log(data);
    })
  }

}
