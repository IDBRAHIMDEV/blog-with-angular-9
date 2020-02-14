import { AuthService } from './../../services/auth.service';
import { TokenService } from './../../services/token.service';
import { Router } from '@angular/router';
import { AccountService } from './../../services/account.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    'email': new FormControl(),
    'password': new FormControl(),
  })


  constructor(private accountService: AccountService,    
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService) { }
    
    ngOnInit() {
    }
    
    login() {
      this.accountService.login(this.loginForm.value)
      .subscribe(res => this.handleResponse(res));
    }
    
    handleResponse(data) {
      
      this.Token.handle(data.token);
      this.Auth.changeAuthStatus(true);
      this.router.navigateByUrl('/');
    }
}
