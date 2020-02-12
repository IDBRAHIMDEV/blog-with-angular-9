import { ArticleService } from './../../services/article.service';
import { Article } from './../../models/article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  articles:Article[] = [];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles()
  }

  getArticles() {
    this.articleService.getAll()
        .subscribe((res: Article[]) => this.articles = res['data'])
  }

}
