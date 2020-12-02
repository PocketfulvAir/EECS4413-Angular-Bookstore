/**
 * @description functions for the admin analytic page
 * @author Rui Yang Huang
 */

import { Component, OnInit, Input } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  top;
  bookReport;
  checker;

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
    let check = this.httpClientService.getToken();
    if (check != "admin") { 
      alert("Illegal access");
      this.router.navigate(['']);
    }
    else {
      this.genReport();
      this.gentopten();
      const source = timer(1, 5000);
      const subscribe = source.subscribe(() => this.gentopten())
    }
  }
  genReport() {
    this.httpClientService.getBookReport().subscribe(
      (request) => {
        this.bookReport = request;
      }
    )
  }

  gentopten() {
    this.httpClientService.getTopTen().subscribe(
      (request) => {
        console.log(request);
        this.top = request;
      }
    )
  }
  
}
