import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  panelOpenState: boolean = false;
  dropdownOpen: boolean = false;
  selectedDropdownItem: string = 'Profile-details';

  constructor(private router: Router, private loader: LoaderService) { }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectDropdownItem(item: string): void {
    this.selectedDropdownItem = item;
    this.dropdownOpen = false;
    if (this.selectedDropdownItem === "Logout") {
      this.loader.show();

      setTimeout(() => {
        window.sessionStorage.removeItem("logged");
        this.router.navigate(["login"]);
        this.loader.close();
      }, 1000);
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
