import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:8000/api/category');
  }

  getArticlesFromCategory(id: number) {
    return this.http.get(`http://localhost:8000/api/category/${id}`)
  }
}
