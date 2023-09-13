import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private route: Router) { }

  loginForm: FormGroup = this.fb.group({
    userName: ["", [Validators.required, Validators.minLength(5)]],
    password: ["", [Validators.required, Validators.minLength(5)]]
  });

  ngOnInit(): void {
    if (window.sessionStorage.getItem("logged")) {
      this.route.navigate(["/main-body"]);
    }
  }

  fetchLoginDetails() {
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;

    if (userName === "admin" && password === "admin") {
      this.route.navigate(["/main-body"]);
      window.sessionStorage.setItem("logged", "yes");
    }
  }
}
