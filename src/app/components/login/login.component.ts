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

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.accountService.register(this.loginForm.value)
        .subscribe(res => this.router.navigate(['/']));
  }

}
