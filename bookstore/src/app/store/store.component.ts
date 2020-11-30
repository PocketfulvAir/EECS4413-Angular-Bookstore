/**
 * @description functions for the book view and selection
 * @author Rui Yang Huang
 */

import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { HttpClientService } from '../service/http-client.service';
import { Category } from '../model/Category';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../model/CartItem';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  books: Array<Book>;
  booksReceived: Array<Book>;
  categories: Array<Category>;
  selectedBook: Book;
  selectedbid: string;
  action: string;
  chosenCat;
  cartBooks: any;
 


  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshData();
    this.httpClientService.getCategories().subscribe(
      response => this.handleSuccessfulCatResponse(response)
    );
    let data = localStorage.getItem('cart');
    if (data !== null)
      this.cartBooks = JSON.parse(data);
    else
      this.cartBooks = [];
  }

  refreshData() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulBookResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        if (this.selectedbid) {
          this.selectedBook = this.books.find(book => book.bid === this.selectedbid)
        }
      }
    )
  }

  handleSuccessfulCatResponse(response) {
    this.categories = response;
  }

  handleSuccessfulBookResponse(response) {
    this.books = response;
  }

  viewBook(bid: string) {
    this.selectedbid = bid;
    this.router.navigate(['store'], { queryParams: { bid, action: 'view' } });
    this.refreshData();
  }

  addToCart(bid) {
    this.selectedbid = bid;
    let book = this.books.find(book => book.bid === this.selectedbid);
    let cartItem: CartItem = {
      bid: book.bid,
      title: book.title,
      author: book.author,
      price: book.price,
      quantity: 0
    };
    let cartData = [];
    let data = localStorage.getItem('cart');
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    let pulled = cartData.find(x => x.bid === book.bid);
    if (pulled) {
      console.log("added");
    }
    else {
      cartItem.quantity = 1;
      cartData.push(cartItem);
    }
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
  }

  updateCartData(cartData) {
    this.cartBooks = cartData;
  }

 


}
