/**
 * @description functions for logining in
 * @author Rui Yang Huang
 */

import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { FormBuilder } from '@angular/forms';
import { User } from '../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  testOutput;
  pulluser: User;
  token;
  loggedIn;
  
  constructor(private httpClientService: HttpClientService, private router: Router) {}

  ngOnInit() {
    if (this.httpClientService.checkToken())
      this.loggedIn = 1;
    else
      this.loggedIn = 0;
    console.log(this.loggedIn);
  }

  
  testCompare() {
    
    let user = (document.getElementById("user") as HTMLInputElement).value;
    let pass = (document.getElementById("pw") as  HTMLInputElement).value;
    let check;
    this.httpClientService.getUser(user).subscribe(
      (response) => {
        let check = JSON.stringify(response);
        let users = JSON.parse(check);
        if (users.username == user && users.password == pass) {
          console.log("first check");
          this.genAndSaveUserToken(check);
          this.testOutput = true;
        } else this.testOutput = false;
      }
    );
    this.router.navigate(['']);
  }

  genAndSaveUserToken(user) {
    this.httpClientService.saveToken(user.role);
    this.httpClientService.saveUser(user);
  }

  checksession() {
    this.token = this.httpClientService.getToken();
    console.log(this.token);
    this.httpClientService.signOut();
  }

  logOut() {
    this.httpClientService.signOut();
    this.router.navigate(['']);
  }

  handleUser(response) {
    this.pulluser = response;
  }
}
