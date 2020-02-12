import { Article } from './../../models/article';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {

  category: any[] = [];
  loading: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.loading = true;
      this.categoryService.getArticlesFromCategory(params.idCategory)
          .subscribe((res: any[]) => {
            this.category = res['data'];
            this.loading = false;
          })
    })
  }

}
