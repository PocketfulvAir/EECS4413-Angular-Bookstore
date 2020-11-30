/**
 * @description functions for the admin analytic page
 * @author Rui Yang Huang
 */

import { Component, OnInit, Input } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  top;
  bookReport;
  checker;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.genReport();
     this.gentopten();
    const source = timer(1, 5000);
    //this.top = this.httpClientService.getTopTen();
    //this.top = source.subscribe(() => this.httpClientService.getTopTen)
    const subscribe = source.subscribe(() => this.gentopten())
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
