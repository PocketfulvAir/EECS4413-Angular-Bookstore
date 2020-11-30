/**
 * @description functions for registering a user
 * @author Rui Yang Huang
 */

import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { User } from '../model/User';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: Array<User>;
  registerForm;
  
  constructor(private httpClientService: HttpClientService,
    private formBuilder: FormBuilder, ) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      password:'' 
    });
    }

  ngOnInit(): void {
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response) {
    this.users = response;
  }

  onSubmit(userData) {
    userData.type = 'user';
    this.httpClientService.addUser(userData).subscribe(
      (data) => {
        console.log("success");
      }
    );
   
  }
}
