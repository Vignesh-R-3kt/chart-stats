import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  panelOpenState: boolean = false;
  dropdownOpen: boolean = false;
  selectedDropdownItem: string = 'Profile-details';

  constructor(private router:Router){}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectDropdownItem(item: string): void {
    this.selectedDropdownItem = item;
    this.dropdownOpen = false;
    if (this.selectedDropdownItem === "Logout") {
      window.sessionStorage.removeItem("logged");
      this.router.navigate(["login"]);
    }
  }

  isItemSelected(item: string): boolean {
    return this.selectedDropdownItem === item;
  }

  profileDetails() {
    console.log('profile-details clicked');
  }

  logout() {
    console.log('Logout profile clicked');
  }
}
