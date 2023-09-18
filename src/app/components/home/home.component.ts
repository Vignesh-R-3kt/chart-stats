import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    $('#project-list-table').DataTable().destroy();
    setTimeout(() => {
      $('#project-list-table').DataTable({
        pagingType: 'full_numbers',
        processing: true,
      });
    }, 1);
  }
}
