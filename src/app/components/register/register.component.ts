import { Router } from '@angular/router';
import { AccountService } from './../../services/account.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm = new FormGroup({
    'name': new FormControl(null),
    'email': new FormControl(null),
    'password': new FormControl(null)
  });

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  createAccount() {
    this.accountService.register(this.registerForm.value)
        .subscribe(res => this.router.navigate(['/']));
  }

}
