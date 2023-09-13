import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private route: Router, private loader: LoaderService) { }

  loginForm: FormGroup = this.fb.group({
    userName: ["", [Validators.required, Validators.minLength(5)]],
    password: ["", [Validators.required, Validators.minLength(5)]]
  });

  ngOnInit(): void {
  }

  fetchLoginDetails() {
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;

    this.loader.show();

    setTimeout(() => {
      if (userName === "admin" && password === "admin") {
        this.route.navigate(["/main-body"]);
        window.sessionStorage.setItem("logged", "yes");
        this.loader.close();
      } else {
        this.loader.close();
        setTimeout(() => {
          alert("Invalid Login Credentials");
        }, 100)
      };
    }, 1500);
  }
}
