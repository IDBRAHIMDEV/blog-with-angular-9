import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {


  article: Article = null;

  constructor(
    private articleService: ArticleService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleService.find(params.id).subscribe(res => {
        this.article = res['data'];
      })
    })
  }

}
