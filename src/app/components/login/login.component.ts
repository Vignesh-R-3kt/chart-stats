import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private route: Router, private loader: LoaderService, private popup: PopupService) { }

  loginForm: FormGroup = this.fb.group({
    userName: ["", [Validators.required, Validators.minLength(5)]],
    password: ["", [Validators.required, Validators.minLength(5)]]
  });

  users: {}[] = [
    {
      username: "vignesh",
      password: "12345",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTGZPBgb1rrNuzDZbUT5jFmP18ICdqLaf2g&usqp=CAU"
    },
    {
      username: "vishal",
      password: "12345",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTGZPBgb1rrNuzDZbUT5jFmP18ICdqLaf2g&usqp=CAU"
    },
    {
      username: "rajkumar",
      password: "12345",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTGZPBgb1rrNuzDZbUT5jFmP18ICdqLaf2g&usqp=CAU"
    },
    {
      username: "surekha",
      password: "12345",
      img: "https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_640.png"
    }
  ]

  ngOnInit(): void {
  }

  fetchLoginDetails() {
    const userName = this.loginForm.value.userName.trim();
    const password = this.loginForm.value.password.trim();

    this.loader.show();

    setTimeout(() => {
      let userLoggedIn = false;
      let activeUser;

      this.users.forEach((user: any) => {
        if (user.username === userName && user.password === password) {
          userLoggedIn = true;
          activeUser = user;
        }
      })

      if (userLoggedIn && activeUser) {
        this.loader.close();
        this.route.navigate(["/main-body"]);
        window.sessionStorage.setItem("logged", "yes");
        window.sessionStorage.setItem("user", JSON.stringify(activeUser));
      } else {
        this.loader.close();
        setTimeout(() => {
          this.popup.openPopup("Invalid Login Credentials");
        }, 200)
      }
    }, 1500);
  }
}
