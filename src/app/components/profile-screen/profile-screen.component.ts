import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.scss']
})
export class ProfileScreenComponent implements OnInit {
  currentUser: any;

  ngOnInit(): void {
    const user: any = window.sessionStorage.getItem("user");
    this.currentUser = JSON.parse(user);
  }
}
