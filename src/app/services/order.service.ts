import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderData$: Observable<any>;
  clientData$: Observable<any>;
  chefsData$: Observable<any>;
  menusData$: Observable<any>;
  coursesData$: Observable<any>;
  reservationsData$: Observable<any>;
  constructor(private http: HttpClient) {
    this.clientData$ = this.http.get('http://localhost:3014/api/getClients');
    this.orderData$ = this.http.get('http://localhost:3014/api/getOrders');
    this.chefsData$ = this.http.get('http://localhost:3014/api/getChefs');
    this.menusData$ = this.http.get('http://localhost:3014/api/getAllMenu');
    this.coursesData$ = this.http.get('http://localhost:3014/api/getCourses');
    this.reservationsData$ = this.http.get('http://localhost:3014/api/getReservations');
   }
}
