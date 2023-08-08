import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  isPopupOpen: boolean = false;
  todayDate: Date = new Date();
  startDate: Date = new Date();

  constructor(private fb: FormBuilder, private http: ApiService) { }

  projectForm = this.fb.group({
    projectName: ["", [Validators.required, Validators.minLength(5)]],
    projectOwner: ["", [Validators.required, Validators.minLength(5)]],
    startDate: ["", Validators.required],
    endDate: ["", Validators.required],
    description: ["", [Validators.required, Validators.minLength(15)]]
  });
  
  ngOnInit(): void {
      this.http.fetchAllData().subscribe((res:any) => {
        console.log(res);
      })
  }

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  updateEndDate(e: any) {
    const startDate = new Date(e.target.value);
    this.startDate = startDate;
  }

  fetchFormData(e: any) {
    e.preventDefault();
    console.log(this.projectForm.value);


    // Reset form
    this.projectForm.reset();
    this.closePopup();
  }
}
