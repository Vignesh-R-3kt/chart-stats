import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "localhost:3000";

  constructor(private api: HttpClient) { }

  fetchAllData() {
    return this.api.get(`http://${this.baseUrl}/projects`);
  }
}
