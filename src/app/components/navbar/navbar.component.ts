import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  panelOpenState: boolean = false;
  isNavbarExpanded: boolean = false;

  toggleNavbar() {
    this.isNavbarExpanded = !this.isNavbarExpanded;
  }

  unsetToggler() {
    this.isNavbarExpanded = false;
  }
}
