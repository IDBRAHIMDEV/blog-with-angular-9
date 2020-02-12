import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowComponent } from './components/show/show.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { HttpClientModule } from "@angular/common/http";
import { ListArticleComponent } from './components/list-article/list-article.component';
import { ArticleComponent } from './components/article/article.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { DetailsCategoryComponent } from './components/details-category/details-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShowComponent,
    PageNotFoundComponent,
    ListArticleComponent,
    ArticleComponent,
    ListCategoryComponent,
    DetailsCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
