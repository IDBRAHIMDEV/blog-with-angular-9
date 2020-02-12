import { Article } from './../../models/article';
import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {

    console.log('salam')
    this.articleService.getAll()
        .subscribe((res: Article[]) => this.articles = res);
  }

}
