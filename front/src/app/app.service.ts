import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private API_URL = "http://localhost:9999"
  private endpoint = this.API_URL + "/ping";

  constructor(
    private httpClient: HttpClient
  ) { }

  pingSignal(): Observable<Object> {

    return this.httpClient.get(this.endpoint);
  }
}
