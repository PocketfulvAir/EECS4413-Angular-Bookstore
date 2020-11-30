/**
 * @description functions to control the cart
 * @author Rui Yang Huang
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { Order } from '../model/Order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartBooks: any;
  totalPrice: number = 0;
  totalOutput:string ="0.00";
  constructor(private router: Router, private httpClientService: HttpClientService) { }


  ngOnInit() {
    let data = localStorage.getItem('cart');
    if (data !== null)
      this.cartBooks = JSON.parse(data);
    else
      this.cartBooks = [];
    console.log(this.cartBooks);
    this.calcTotalPrice();
    this.updateOutput();
  }

  calcTotalPrice() {
    this.cartBooks.forEach((element) => {
      this.totalPrice = this.totalPrice + (element.price * element.quantity);
    });
  }

  changeQty(bid, sign) {
    let change = 0;
    if (sign >= 0)
      change = 1;
    else
      change = -1;
    console.log("ran");
    let newcart = [];
    this.cartBooks.forEach((element) => {
      if (element.bid === bid) {
        element.quantity += change;
    }
    });
    this.sweepCheck();
    this.updateTotal();
  }

  sweepCheck() {
    let newcart = [];
    this.cartBooks.forEach((element) => {
      if (element.quantity > 0)
        newcart.push(element);
    }
    );
    this.cartBooks = newcart;
    localStorage.setItem('cart', JSON.stringify(this.cartBooks));
  }

  updateTotal() {
    this.totalPrice = 0;
    this.calcTotalPrice();
    this.updateOutput();
  }

  updateOutput() {
    this.totalOutput = this.totalPrice.toFixed(2);
  }
  sendToPay() {
    this.router.navigate(['/payment']);
  }

  emptyCart() {
    this.cartBooks = [];
    this.updateTotal();
    localStorage.clear();
  }
}
