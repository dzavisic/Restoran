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
  download(filename:any, jsontext:any){
    var strinng = "Chef_id Password";
    for(let i=0; i<jsontext.length; i++){
      strinng = strinng + "\n" + jsontext[i]['chef_id'] + " " + jsontext[i]['password'];
    }
    var text = strinng;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  downloadChef(){

    this.chefs$ = this.order.chefsData$.pipe(
      tap(data => this.download('chef_list.txt',data.data)),
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
