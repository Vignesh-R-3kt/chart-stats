import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent {
  isPopupOpen: boolean = false;
  todayDate: Date = new Date();
  startDate: Date = new Date();

  constructor(private fb: FormBuilder) { }

  projectForm = this.fb.group({
    projectName: ["", [Validators.required, Validators.minLength(5)]],
    projectOwner: ["", [Validators.required, Validators.minLength(5)]],
    startDate: ["", Validators.required],
    endDate: ["", Validators.required],
    description: ["", [Validators.required, Validators.minLength(15)]]
  });

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
  }
}
