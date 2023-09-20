import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { TrackUserService } from 'src/app/services/track-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  panelOpenState: boolean = false;
  dropdownOpen: boolean = false;
  selectedDropdownItem: string = 'Profile-details';
  projects: any = ["EIC", "Persistent", "Roche", "3KT_Administration", "Armorcode"];
  user: any;
  userActive: boolean = true;

  constructor(private router: Router, private loader: LoaderService, private route: ActivatedRoute, private userTrack: TrackUserService) { }

  ngOnInit(): void {
    const userDetails: any = window.sessionStorage.getItem("user");
    this.user = JSON.parse(userDetails);
    this.userTrack.isUserActive.subscribe((res: any) => {
      this.userActive = res;
    })
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  selectDropdownItem(item: string): void {
    this.selectedDropdownItem = item;
    this.dropdownOpen = false;
    if (this.selectedDropdownItem === "Logout") {
      this.loader.show();

      setTimeout(() => {
        window.sessionStorage.removeItem("logged");
        window.sessionStorage.removeItem("user");
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
