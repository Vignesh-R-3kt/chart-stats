import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchInput: string = ''; // Store the search input value
  projectNames: string[] = ["EIC", "Persistent", "Roche", "3KT_Administration", "Armorcode"];
  filteredProjects: string[] = [];

  constructor(private router: Router, private sharedService: SharedService) {}

  navigateToProjectsSummary() {
    // Get the search input value
    const searchTerm = this.searchInput.trim();

    if (searchTerm) {
      // Navigate to the projects summary page with the search term in the URL
      // this.sharedService.expandArrowEvent.emit();
      this.sharedService.notifySubmitButtonClicked();
      this.router.navigate(['/main-body/projects', searchTerm, 'summary']);
    }
  }

  filterProjects() {
    if(this.searchInput.trim()){
      this.filteredProjects = this.projectNames.filter(project =>
        project.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    } else {
      this.filteredProjects = []
    }
  }  

  selectSuggestion(suggestion: string) {
    this.searchInput = suggestion;
    // this.navigateAction(suggestion); // Replace with your actual search action
    this.filteredProjects = []; // Clear suggestions
  }  
}
