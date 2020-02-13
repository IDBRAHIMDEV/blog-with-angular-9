import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  urlApi = "http://localhost:8000/api/article";
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.urlApi);
  }


  find(id: number) {
    return this.http.get(`${this.urlApi}/${id}`);
  }

  add(data) {
    return this.http.post(this.urlApi, data);
  }

}
