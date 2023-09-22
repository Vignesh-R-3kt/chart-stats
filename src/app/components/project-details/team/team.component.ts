import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  profiles = [
    { id: 1, name: 'Adam', designation: 'Designer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBm4GUfi8-EYUegvCGLSMzMa5TyNHzwuO2aQ&usqp=CAU',timeZone: '(GMT) Coordinated Universal Time' ,type: 'Employee',experience:"2 Years",location:"UAE",employeeId:"adam123",primaryEmail:"adam@gmail.com" },
    { id: 2, name: 'Eve', designation: 'Developer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbH7sNXBGCWkuN6YMbM_iv13oygBao6Fl7w&usqp=CAU',timeZone: '(GMT) Coordinated Universal Time' ,type: 'Employee',experience:"1 Years",location:"UN",employeeId:"eve123",primaryEmail:"eve@gmail.com" },
    { id: 3, name: 'John', designation: 'Manager', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQq6gaTf6N93kzolH98ominWZELW881HqCgw&usqp=CAU',timeZone: '(GMT) Coordinated Universal Time' ,type: 'Employee',experience:"6 Years",location:"US",employeeId:"john123",primaryEmail:"john@gmail.com" },
    { id: 4, name: 'Jane', designation: 'Tester', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCrgWSayYrKu-nMuVPHgrVTyVEUJ-f8dnRw&usqp=CAU',timeZone: '(GMT) Coordinated Universal Time' ,type: 'Employee',experience:"3 Years",location:"CA",employeeId:"jane123",primaryEmail:"jane@gmail.com" },
  ];

  selectedProfileIndex: number = 0;

  selectedProfile: any;

  constructor() { }

  ngOnInit() {
    if (this.profiles.length > 0) {
      this.selectedProfile = this.profiles[0];
    }
  }

  toggleProfileDetails(index:number, profile: any,) {
    this.selectedProfileIndex = index;
    if (this.selectedProfile === profile) {
      return;
    }
    this.selectedProfile = profile;
  }
}
