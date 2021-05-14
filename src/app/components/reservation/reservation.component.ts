import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  fullname:string="";
  num_people:string="";
  datetime:string="";
  tel_numb:string="";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  sendReservation(){
    let url1 = "http://localhost:3014/api/sendReservation";
    this.http.post(url1,{fullname:this.fullname, num_people:this.num_people, datetime:this.datetime, tel_numb:this.tel_numb}).toPromise().then((data:any) => {});
    window.location.href='/';
  }

}
