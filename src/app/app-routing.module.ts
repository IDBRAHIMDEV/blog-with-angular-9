import { BeforeAuthGuard } from './guards/before-auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
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
 
  { path: "article", component: HomeComponent, children: [

    { path: "", component: ListArticleComponent },
    { path: "create", component: AddArticleComponent, canActivate: [BeforeAuthGuard] },
    { path: ":id", component: ShowComponent },
    { path: "category/:idCategory", component: DetailsCategoryComponent },

  ]},
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
