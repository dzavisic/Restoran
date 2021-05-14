import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations$:Observable<any>;
  constructor(public order: OrderService, private http: HttpClient) { }

  ngOnInit(): void {
    this.reservations$ = this.order.reservationsData$.pipe(
      //tap(data => console.log(data.data)),
      map(data => data.data)
    )
  }

  logoff(){
    localStorage.removeItem('token');
    console.log("Token has expired!");
    window.location.href="/login";
  }

  deleteReservation(fullname:any){
    let url1 = "http://localhost:3014/api/deleteReservation";
    this.http.post(url1,{fullname:fullname}).toPromise().then((data:any) => {});
    window.location.reload();
  }

}
