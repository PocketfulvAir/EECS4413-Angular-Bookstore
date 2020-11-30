/**
 * @description Service page to receive REST operation outputs 
 * @author Rui Yang Huang
 */

import { Injectable } from '@angular/core';
import { Book } from '../model/Book';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/Order';
import { User } from '../model/User';
import { Category } from '../model/Category';
import { OrderItem } from '../model/OrderItem';
import { Review } from '../model/Review';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  check;

  constructor(private httpClient: HttpClient) { }

  getBooks() {
    return this.httpClient.get<Book[]>('http://localhost:8080/books/get');
  }

  getOrders() {
    return this.httpClient.get<Order[]>('http://localhost:8080/orders/get');
  }

  getUsers() {
    return this.httpClient.get<User[]>('http://localhost:8080/users/get');
  }

  addUser(user : User) {
    return this.httpClient.post<User>('http://localhost:8080/users/add', user);
  }

  addOrder(order: Order) {
    return this.httpClient.post<Order>('http://localhost:8080/orders/add', order);
  }

  addOrderItems(order) {
    return this.httpClient.post ('http://localhost:8080/orders/additems', order);
  }

  getUser(username: string) {
    return this.httpClient.get('http://localhost:8080/users/byuser?username=' + username);
  }

  getCategories() {
    return this.httpClient.get<Category[]>('http://localhost:8080/categories/get');
  }

  addReview(review: Review) {
    return this.httpClient.post<Review>('http://localhost:8080/books/addreview', review);
  }

  getBookReport() {
    return this.httpClient.get('http://localhost:8080/books/getreport');
  }
  getReviews() {
    return this.httpClient.get('http://localhost:8080/books/getreviews');
  }
  getTopTen() {
    return this.httpClient.get('http://localhost:8080/books/gettopten');
  }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUserKey(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  public checkToken(): boolean {
    if (sessionStorage.getItem(TOKEN_KEY))
      return true;
    else
      return false;   
  }

}
