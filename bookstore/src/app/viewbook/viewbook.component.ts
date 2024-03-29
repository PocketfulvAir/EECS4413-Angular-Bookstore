import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../model/Book';
import { Review } from '../model/Review';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  reviews;
  added;
  loggedIn;
  book;
    
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.book = JSON.parse(localStorage.getItem("viewbook"));
    this.httpClientService.getReviews().subscribe(
      (request) => { this.reviews = request; });
    this.loggedIn = this.httpClientService.checkToken();
  }

  addReview() {
    let d = (document.getElementById("review") as HTMLInputElement).value;
    d = this.sanitizeText(d);
    let review: Review = {
      bid: this.book.bid,
      review: d
    };
    this.httpClientService.addReview(review).subscribe(
      (response) => { this.added = true; }
    );
  }

  sanitizeText(text) {
  let sanitize = document.createElement('san');
  sanitize.innerText = text;
  return sanitize.innerHTML;
}
}
