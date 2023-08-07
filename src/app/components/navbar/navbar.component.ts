import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  panelOpenState: boolean = false;
  dropdownOpen: boolean = false;
  selectedDropdownItem: string = 'Profile-details';

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectDropdownItem(item: string): void {
    this.selectedDropdownItem = item;
    this.dropdownOpen = false;
    console.log('Selected dropdown item:', this.selectedDropdownItem);
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
