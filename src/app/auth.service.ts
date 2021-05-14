import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

declare function getCartItems(): any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loggedIn(){
    let check = localStorage.getItem('token');
    return !!check;
  }
  filled(){
    var cart = getCartItems();
    if(cart[0]!=null){
        return true;
    }
    else{
        return false;
    }
  }
}