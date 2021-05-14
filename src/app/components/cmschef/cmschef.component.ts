import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cmschef',
  templateUrl: './cmschef.component.html',
  styleUrls: ['./cmschef.component.css']
})
export class CmschefComponent implements OnInit {
  chefs$: Observable<any>;
  chef_id:string="";
  password:string="";
  constructor(public order: OrderService, private http: HttpClient) { }

  ngOnInit(): void {
    this.chefs$ = this.order.chefsData$.pipe(
      //tap(data => console.log(data.data)),
      map(data => data.data)
    )
  }
  removeChef(chef_id:any){
    let url1 = "http://localhost:3014/api/removeChef";
    this.http.post(url1,{chef_id:chef_id}).toPromise().then((data:any) => {});
    window.location.reload()
  }
  addChef(){
    let url1 = "http://localhost:3014/api/addChef";
    this.http.post(url1,{chef_id:this.chef_id, password: this.password}).toPromise().then((data:any) => {});
    window.location.reload()
  }

}
