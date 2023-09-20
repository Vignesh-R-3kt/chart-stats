import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: any[] = [
    {
      company: "Louis Vuitton",
      company_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3tMPf1GfjK6hilt2NDTvqQgFJcqL4-Ez4A&usqp=CAU",
      status: "danger",
      type: "bravo",
      id: 9177,
      contact: "Evan Flores",
      contact_img: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    {
      company: "Louis Vuitton",
      company_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3tMPf1GfjK6hilt2NDTvqQgFJcqL4-Ez4A&usqp=CAU",
      status: "active",
      type: "bravo",
      id: 9177,
      contact: "Evan Flores",
      contact_img: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    {
      company: "Louis Vuitton",
      company_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3tMPf1GfjK6hilt2NDTvqQgFJcqL4-Ez4A&usqp=CAU",
      status: "active",
      type: "bravo",
      id: 9177,
      contact: "Evan Flores",
      contact_img: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    {
      company: "Louis Vuitton",
      company_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3tMPf1GfjK6hilt2NDTvqQgFJcqL4-Ez4A&usqp=CAU",
      status: "active",
      type: "bravo",
      id: 9177,
      contact: "Evan Flores",
      contact_img: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    {
      company: "Louis Vuitton",
      company_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3tMPf1GfjK6hilt2NDTvqQgFJcqL4-Ez4A&usqp=CAU",
      status: "pending",
      type: "bravo",
      id: 9177,
      contact: "Evan Flores",
      contact_img: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },

    {
      company: "Louis Vuitton",
      company_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3tMPf1GfjK6hilt2NDTvqQgFJcqL4-Ez4A&usqp=CAU",
      status: "active",
      type: "bravo",
      id: 9177,
      contact: "Evan Flores",
      contact_img: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    {
      company: "Louis Vuitton",
      company_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3tMPf1GfjK6hilt2NDTvqQgFJcqL4-Ez4A&usqp=CAU",
      status: "pending",
      type: "bravo",
      id: 9177,
      contact: "Evan Flores",
      contact_img: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    {
      company: "Louis Vuitton",
      company_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3tMPf1GfjK6hilt2NDTvqQgFJcqL4-Ez4A&usqp=CAU",
      status: "active",
      type: "bravo",
      id: 9177,
      contact: "Evan Flores",
      contact_img: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    {
      company: "Louis Vuitton",
      company_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3tMPf1GfjK6hilt2NDTvqQgFJcqL4-Ez4A&usqp=CAU",
      status: "active",
      type: "bravo",
      id: 9177,
      contact: "Evan Flores",
      contact_img: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
  ];
  table_action_index: any;
  table_action_popup: boolean = false;

  ngOnInit() {
    $('#project-list-table').DataTable().destroy();
    setTimeout(() => {
      $('#project-list-table').DataTable({
        pagingType: 'full_numbers',
        processing: true,
      });
    }, 1);
  }

  openPopup(index: any) {
    this.table_action_index = index;
    this.table_action_popup = true;
  }

  closePopup() {
    this.table_action_index = "";
    this.table_action_popup = false;
  }
}
