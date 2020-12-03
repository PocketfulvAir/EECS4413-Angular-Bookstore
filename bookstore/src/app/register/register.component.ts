/**
 * @description functions for registering a user
 * @author Rui Yang Huang
 */

import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { User } from '../model/User';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: Array<User>;
  registerForm;

  constructor(private httpClientService: HttpClientService,
    private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      billing: '',
      mailing: ''
    });
  }

  ngOnInit(): void {
    if (this.httpClientService.checkToken())
      this.router.navigate(['']);
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response) {
    this.users = response;
  }

  onSubmit(userData) {
    let reg = new RegExp("[a-zA-Z0-9_-]@[a-zA-Z0-9].c((om$)|(a$))");
    if (userData.username.length == 0)
      alert("Input a username");
    else if (userData.email.length == 0)
      alert("Input an email");
    else if (userData.password.length == 0)
      alert("Input a password");
    else if (userData.billing.length == 0)
      alert("Input a billing address");
    else if (userData.mailing.length == 0)
      alert("Input a mailing address");
    else if (!reg.test(userData.email))
      alert("not a valid email");
    else {
      userData.type = 'user';
      this.httpClientService.saveToken("user");
      this.httpClientService.saveUser(JSON.stringify(userData));

      this.httpClientService.addUser(userData).subscribe(
        (data) => {
          alert("Successful Registration");
        }
      );
      let check;
      check = localStorage.getItem("redirect");
      if (check) {
        localStorage.removeItem("redirect");
        this.router.navigate(['/payment']);
      }
      else
        this.router.navigate(['/login']);
    }
  }
}
