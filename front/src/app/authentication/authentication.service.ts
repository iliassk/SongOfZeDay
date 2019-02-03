import {Injectable} from '@angular/core';
import {CredentialsInterface} from './models/credentials.interface';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private API_URL: string = "http://localhost:9999/";
  private endpoint: string = this.API_URL + 'auth/login';

  constructor(private httpClient: HttpClient) {
  }

  login(credentials: CredentialsInterface): Observable<boolean> {
    return this.httpClient.post<boolean>(this.endpoint, credentials);
  }
}
