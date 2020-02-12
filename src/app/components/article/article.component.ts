import { Category } from './../../models/category';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input('id') id = 0;
  @Input('genre') genre = "";
  @Input('title') title = "";
  @Input('content') content = "";
  @Input('updated-at') updatedAt = null;
  @Input('category') category: Category = null;
  @Input('user') user: { username: string, code: number } = null;

  constructor() { }

  ngOnInit() {
  }

}
