import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    login: [""],
    password: [""]
  })

  // loginForm = new FormGroup({
  //   login: new FormControl(""),
  //   password: new FormControl("")
  // });

  ngOnInit() {

  }

  onSubmit() {
    console.warn(this.loginForm.value);
  }

}
