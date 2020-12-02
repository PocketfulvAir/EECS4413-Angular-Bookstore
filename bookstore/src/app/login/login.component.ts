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
  pulluser: User;
  token;
  loggedIn;
  
  constructor(private httpClientService: HttpClientService, private router: Router) {}

  ngOnInit() {
    if (this.httpClientService.checkToken())
      this.loggedIn = 1;
    else
      this.loggedIn = 0;
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
          this.genAndSaveUserToken(check);
          let checker;
          checker = localStorage.getItem("redirect");
          if (checker) {
            localStorage.removeItem("redirect");
            this.router.navigate(['/payment']);
          } else
            this.router.navigate(['']);

        } else alert("Incorrect username or password")
        
      }
    );
  }

  genAndSaveUserToken(user) {
    let obuser = JSON.parse(user);
    this.httpClientService.saveToken(obuser.type);
    this.httpClientService.saveUser(user);
  }

  checksession() {
    this.token = this.httpClientService.getToken();
    this.httpClientService.signOut();
  }

  logOut() {
    this.httpClientService.signOut();
    window.location.reload();
  }

  handleUser(response) {
    this.pulluser = response;
  }
}
