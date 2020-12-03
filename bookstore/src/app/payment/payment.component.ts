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
  requests;
  added;

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
    if (!this.httpClientService.getToken())
      this.router.navigate(['']);
    this.user = JSON.parse(this.httpClientService.getUserKey());
    this.requests = 0;
     let data = localStorage.getItem('cart');
    if (data !== null)
      this.cartBooks = JSON.parse(data);
    else
      this.cartBooks = [];
    this.totalPrice = this.calcTotal();
  }

  processOrder() {
    let cc = (document.getElementById("ccnum") as HTMLInputElement).value;
    if (this.requests >= 2) {
      alert("Credit Card Authorization Failed");
      this.router.navigate(['']);
    } else {
      if (cc.length == 16 && !isNaN(Number(cc))) {

        let onum = Math.floor(Math.random() * 2102102102) + 1
        let d = new Date().toString();

        let order: Order = {
          oid: onum,
          username: this.user.username,
          date: d,
          status: "Pending",
          price: this.totalPrice
        };

        this.httpClientService.addOrder(order).subscribe(
          (proxy) => {
            this.added = true;
          }
        );
        let orderItems = [];
        this.cartBooks.forEach((element) => {
          let orderItem: OrderItem = {
            oid: onum,
            bid: element.bid,
            qty: element.quantity,
            price: element.price
          };
          orderItems.push(orderItem);
        });
        let tempa = JSON.stringify(orderItems);


        this.httpClientService.addOrderItems(tempa).subscribe(
          (proxy) => {
            alert("Order Successfully Completed");
          });
        this.emptyCart();
        this.router.navigate(['']);

      }
      else {
        this.requests++;
        alert("invalid Credit Card number");
      }
    }
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
