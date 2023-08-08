import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "localhost:3000";

  constructor(private api: HttpClient) { }

  fetchAllData() {
    return this.api.get(`http://${this.baseUrl}/projects`);
  }

  sendDataToDB(data: any) {
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.api.post(`http://${this.baseUrl}/projects`, JSON.stringify(data), options);
  }
}
