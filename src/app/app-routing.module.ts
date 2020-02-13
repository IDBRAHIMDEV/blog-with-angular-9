import { AddArticleComponent } from './components/add-article/add-article.component';
import { DetailsCategoryComponent } from './components/details-category/details-category.component';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShowComponent } from './components/show/show.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: '/article', pathMatch: 'full' },
  { path: "article", component: ListArticleComponent },
  { path: "article/create", component: AddArticleComponent },
  { path: "article/:id", component: ShowComponent },
  { path: "category/:idCategory/articles", component: DetailsCategoryComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
