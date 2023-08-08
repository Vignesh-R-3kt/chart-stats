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

  tableData: any = "";

  constructor(private fb: FormBuilder, private http: ApiService) { }

  projectForm = this.fb.group({
    projectName: ["", [Validators.required, Validators.minLength(5)]],
    projectOwner: ["", [Validators.required, Validators.minLength(5)]],
    startDate: ["", Validators.required],
    endDate: ["", Validators.required],
    description: ["", [Validators.required, Validators.minLength(15)]]
  });

  ngOnInit(): void {
    this.fetchTableData();
  };

  fetchTableData() {
    this.http.fetchAllData().subscribe((res: any) => {
      this.tableData = res;
    })
  }

  deleteDate(id:number) {
    this.http.deleteData(id).subscribe((res:any) => {
      this.fetchTableData();
    })
  }

  openPopup() {
    this.isPopupOpen = true;
  };

  closePopup() {
    this.isPopupOpen = false;
  };

  updateEndDate(e: any) {
    const startDate = new Date(e.target.value);
    this.startDate = startDate;
  };

  fetchFormData(e: any) {
    e.preventDefault();
    const formData = this.projectForm.value;
    const projectDetails = {
      "projectName": formData.projectName,
      "projectOwner": formData.projectOwner,
      "startDate": new Date(String(formData.startDate)).toLocaleDateString(),
      "endDate": new Date(String(formData.endDate)).toLocaleDateString(),
      "description": formData.description,
    };

    this.http.sendDataToDB(projectDetails).subscribe((res) => {
      this.projectForm.reset();
      this.closePopup();
      this.fetchTableData();
    });
  };
}
