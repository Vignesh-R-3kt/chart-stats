import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "localhost:3000";

  constructor(private api: HttpClient) { }
  
  // Method to fetch all data from DB
  fetchAllData() {
    return this.api.get(`http://${this.baseUrl}/projects`);
  }

   // Method to add new project details to DB
  sendDataToDB(data: any) {
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.api.post(`http://${this.baseUrl}/projects`, JSON.stringify(data), options);
  }

  // Method to delete the item in DB using Id number
  deleteData(id: number) {
    return this.api.delete(`http://${this.baseUrl}/projects/${id}`);
  }
}
