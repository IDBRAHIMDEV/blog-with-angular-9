import { ArticleService } from './../../services/article.service';
import { Category } from './../../models/category';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  loading: boolean = false;
  
  articleForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(3)]),
    content: new FormControl("",  [Validators.required, Validators.minLength(10)]),
    category_id: new FormControl(null, Validators.required)
  })

  categories: Category[] = [];

  constructor(
    private router: Router,
    private articleService: ArticleService,
    private categoryService: CategoryService
    ) { }

  ngOnInit() {
    this.getAllCategories()
  }

  getAllCategories() {
    this.categoryService.getAll()
        .subscribe((res: Category[]) => this.categories = res)
  }

  saveArticle() {
    
    this.loading = true;

    let data = {
      ...this.articleForm.value,
      user_id: 1
    }

    this.articleService.add(data)
        .subscribe(res => this.router.navigateByUrl('/article'))
  }

}
