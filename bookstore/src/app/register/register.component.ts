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
    userData.type = 'user';
    console.log(userData.billing);
    console.log(userData.mailing);
    this.httpClientService.addUser(userData).subscribe(
      (data) => {
        console.log("success");
      }
    );

  }
}
