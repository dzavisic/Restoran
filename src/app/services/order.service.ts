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
    this.clientData$ = this.http.get('https://restoran-lu-server.herokuapp.com/api/getClients');
    this.orderData$ = this.http.get('https://restoran-lu-server.herokuapp.com/api/getOrders');
    this.chefsData$ = this.http.get('https://restoran-lu-server.herokuapp.com/api/getChefs');
    this.menusData$ = this.http.get('https://restoran-lu-server.herokuapp.com/api/getAllMenu');
    this.coursesData$ = this.http.get('https://restoran-lu-server.herokuapp.com/api/getCourses');
    this.reservationsData$ = this.http.get('https://restoran-lu-server.herokuapp.com/api/getReservations');
   }
}
