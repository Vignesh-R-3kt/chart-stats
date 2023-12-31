import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Tracking } from '../components/project-details/project.modal';
import { estimates } from '../components/project-details/project.modal';

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

  fetchPieChartData(): Observable<any[]> {
    return this.api.get<any[]>(`http://${this.baseUrl}/pieChartData`);
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


  // Method to fetch number of projectsData
  fetchNumberOfProjectsData() {
    return this.api.get(`http://${this.baseUrl}/projects-count`);
  }
  fetchAllGoals() {
    return this.api.get(`http://${this.baseUrl}/goals`);
  }
 
  sendGoalToDB(goal: any) {
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.api.post(`http://${this.baseUrl}/goals`, JSON.stringify(goal), options);
  }
 
  deleteGoal(id: number) {
    return this.api.delete(`http://${this.baseUrl}/goals/${id}`);
  }

  //tracking components data
  getProjects(): Observable<Tracking[]> {
    return this.api.get<Tracking[]>(`http://${this.baseUrl}/tracking`);
  }

  //estimates components data
  getEstimatesData(): Observable<estimates[]> {
    return this.api.get<estimates[]>(`http://${this.baseUrl}/estimates`)
  }
}
