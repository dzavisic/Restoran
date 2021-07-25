import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  orders$: Observable<any>;
  clients$: Observable<any>;
  constructor(public order: OrderService, private http: HttpClient) { }

  ngOnInit(): void {
    setInterval(()=>{
      localStorage.removeItem('token');
      console.log("Token has expired!");
      window.location.href="/login";
    },1800000);
    if(!!localStorage.getItem('token')==false){
      window.location.href="/login"
    }
    this.clients$ = this.order.clientData$.pipe(
      //tap(data => console.log(data.data)),
      map(data => data.data)
    );
    this.orders$ = this.order.orderData$.pipe(
      //tap(data => console.log(data.data)),
      map(data => data.data),
      
    );
    setInterval(()=>{
      this.clients$ = this.order.clientData$.pipe(
        //tap(data => console.log(data.data)),
        map(data => data.data)
      );
      this.orders$ = this.order.orderData$.pipe(
        //tap(data => console.log(data.data)),
        map(data => data.data),
        
      );
    },15000)
  }

  deleteOrder(order_id:any){
    let url1 = "https://restoran-lu-server.herokuapp.com/api/deleteOrder";
    this.http.post(url1,{order_id:order_id}).toPromise().then((data:any) => {});
    let url2 = "https://restoran-lu-server.herokuapp.com/api/deleteClient";
    this.http.post(url2,{order_id:order_id}).toPromise().then((data:any) => {});
    window.location.reload();
  }
  logoff(){
    localStorage.removeItem('token');
    console.log("Token has expired!");
    window.location.href="/login";
  }
}
