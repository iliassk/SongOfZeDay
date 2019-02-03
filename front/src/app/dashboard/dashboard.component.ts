import { Component, OnInit } from '@angular/core';
import { DashboardService } from "./dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private title: string;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.pingIt().subscribe(data => {
      this.title = data["response"];
    });
  }

}
