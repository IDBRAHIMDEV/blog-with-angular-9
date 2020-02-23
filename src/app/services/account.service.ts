import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiUrl = "http://localhost:8000/api";
  constructor(private http: HttpClient) { }

  register(data) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
}
