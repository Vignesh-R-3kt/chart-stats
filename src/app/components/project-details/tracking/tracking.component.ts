import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Tracking } from '../project.modal';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {
  projects: any
  tableData: Tracking[];

  constructor(private apiService: ApiService) { }

  ngOnInit():void {
    this.getTrackingData();
  }

  // Method to fetch all data table in tracking 
  getTrackingData() {
    this.apiService.getProjects().subscribe((data) => {
      this.tableData = data as Tracking[];
    $('#projectsTable').DataTable().destroy();
    setTimeout(() => {
      $('#projectsTable').DataTable({
        pagingType: 'full_numbers',
        processing: true,
      })
    }, 1)
    });
  }
}