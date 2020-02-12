import { Category } from './../../models/category';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {


  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {

    this.categoryService.getAll()
        .subscribe((res: Category[]) => this.categories = res);
  }

}
