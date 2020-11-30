/**
 * @description functions for the payment page
 * @author Rui Yang Huang
 */

import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Order } from '../model/Order';
import { OrderItem } from '../model/OrderItem';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cartBooks;
  totalPrice;
  user;

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
    if (!this.httpClientService.getToken())
      this.router.navigate(['']);
    this.user = JSON.parse(this.httpClientService.getUserKey());

     let data = localStorage.getItem('cart');
    if (data !== null)
      this.cartBooks = JSON.parse(data);
    else
      this.cartBooks = [];
    console.log(this.cartBooks);
    this.totalPrice = this.calcTotal();
  }

  processOrder() {
    let onum = Math.floor(Math.random() * 2102102102) + 1
    let d = new Date().toString();

    let order: Order = {
      oid: onum,
      date: d,
      status: "Pending",
      price: this.totalPrice
    };
    console.log(order);
    
    this.httpClientService.addOrder(order).subscribe(
      (proxy) => {
        console.log("addedorder");
      }
    );
    let orderItems = [];
    this.cartBooks.forEach((element) => {
      console.log(element.quantity);
      let orderItem: OrderItem = {
        oid: onum,
        bid: element.bid,
        qty: element.quantity,
        price: element.price
      };
      console.log(orderItem);
      orderItems.push(orderItem);
    });
    console.log("=========");
    console.log(orderItems);
    let tempa = JSON.stringify(orderItems);
    let tempb = JSON.parse(tempa);
    console.log(tempa);
    console.log(tempb);
    
    
    this.httpClientService.addOrderItems(tempa).subscribe(
      (proxy) => {
        console.log("addeditem");
      });
    this.emptyCart();
    this.router.navigate(['']);
  }

  calcTotal() {
    let totval = 0;
      this.cartBooks.forEach((element) => {
        totval = totval + (element.price * element.quantity);
      });
    return totval;
  }

  emptyCart() {
    this.cartBooks = [];
    localStorage.clear();
  }
}
