import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare function makeToken():any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:string="";
  password:string="";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    if(!!localStorage.getItem('token')==true){
      window.location.href="/kitchen"
    }
  }
  login(){
    let url1 = "http://localhost:3014/api/login/kitchen";
    this.http.post(url1,{chef_id:this.id, password:this.password}).toPromise().then((data:any) => {
      if(data['success']===true){
        let tokenized = makeToken();
        localStorage.setItem('token', tokenized);
        window.location.href="http://localhost:4200/kitchen";
      }
    });
    let url2 = "http://localhost:3014/api/login/cms";
    this.http.post(url2,{admin_id:this.id, password:this.password}).toPromise().then((data:any) => {
      if(data['success']===true){
        let tokenized = makeToken();
        localStorage.setItem('token', tokenized);
        window.location.href="http://localhost:4200/cmspanel";
      }
    });
  }
}