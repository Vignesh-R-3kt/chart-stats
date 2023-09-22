import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { estimates } from '../project.modal';

@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.scss']
})
export class EstimatesComponent implements OnInit {

  projects: any
  tableData: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit():void {
   this.getEstimatesData();
  }

  // Method to fetch all data table in estimates 
  getEstimatesData() {
    this.apiService.getEstimatesData().subscribe((data) => {
      this.tableData = data.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          date: new Date(item.date).toLocaleDateString(),
          hours: item.hours,
          cost: item.cost
        };
      });

      $('#projectsTable').DataTable().destroy();
      setTimeout(() => {
        $('#projectsTable').DataTable({
          pagingType: 'full_numbers',
          processing: true,
        });
      }, 1);
    });
  }
}