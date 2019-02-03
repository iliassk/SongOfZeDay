import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private API_URL: string = "http://localhost:9999/";
  private endpoint: string = this.API_URL + 'ping';

  constructor(private httpClient: HttpClient) {
  }

  pingIt(): Observable<Object> {
    return this.httpClient.get(this.endpoint);
  }
}
