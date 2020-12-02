import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  admin;
  constructor(private router: Router, private http: HttpClientService) { }

  ngOnInit() {
    this.admin = this.http.getToken() == "admin";
  }

  toCart() {
    this.router.navigate(['/cart']);
  }
  toHome() {
    this.router.navigate(['/store']);
  }
  toLogin() {
    this.router.navigate(['/login']);
  }
  toAdmin() {
    if (this.http.getToken() === "admin")
      this.router.navigate(['/admin']);
    else
      alert("Not an authorized user");
  }
}
