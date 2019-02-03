import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";
import {finalize} from "rxjs/operators";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private hasLoggedIn: boolean;

  constructor(private fb: FormBuilder, private authService: AuthenticationService) {
    this.loginForm = this.fb.group({
      login: "",
      password: ""
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.authService.login(this.loginForm.value)
      .pipe(
        finalize(() => {
          console.info(this.hasLoggedIn);
          this.loginForm.reset();
        })
      )
      .subscribe(data => {
        this.hasLoggedIn = data;
      });
  }

}
