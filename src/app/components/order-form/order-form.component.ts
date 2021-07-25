import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare function getCartItems(): any;

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  images = ['../../../assets/img/food1.jpg','../../../assets/img/food2.jpg','../../../assets/img/food3.jpg']
  name:string="";
  surname:string="";
  address:string="";
  ad_number:string="";
  place:string="";
  tel_numb:string="";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  place_order(){
    var cart = getCartItems();
    let order_id = Math.random().toString(36).substring(5)
    var buyer = {
        order_id: order_id,
        name: this.name,
        surname: this.surname,
        address: this.address,
        ad_number: this.ad_number,
        place: this.place,
        tel_numb: this.tel_numb
    }
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    var time = today.getHours() + ":" + today.getMinutes();

    var dateTime = date+' '+time;
    
    
    let url = "https://restoran-lu-server.herokuapp.com/api/placeClient";
    this.http.post(url,{
      order_id: order_id,
      name: this.name,
      surname: this.surname,
      address: this.address,
      ad_number: this.ad_number,
      place: this.place,
      tel_numb: this.tel_numb,
      datetime: dateTime
      }).toPromise().then((data:any) => {
      if(data['success']==true){
        for(var i=0; i<cart.length; i++){
          /* NAPRAVIT POST POZIV NA BAZU, SPREMIT ORDER ID NAME I PORTIONS */
          let url = "https://restoran-lu-server.herokuapp.com/api/placeOrders";
          this.http.post(url,{order_id:order_id, name:cart[i]['name'], portions:cart[i]['portions']}).toPromise().then((data:any) => {
            if(data['success']==false){
              alert("Narudžba nije uspjela, probajte isponove sve!")
              let url1 = "https://restoran-lu-server.herokuapp.com/api/deleteOrder";
              this.http.post(url1,{order_id:order_id}).toPromise().then((data:any) => {});
              let url2 = "https://restoran-lu-server.herokuapp.com/api/deleteClient";
              this.http.post(url2,{order_id:order_id}).toPromise().then((data:any) => {});
            }
            else{
              window.location.href = '/';
            }
          });
        }
      }
      else{
        alert("Probajte ponovno ispuniti podatke!");
      }
    });
  }

}
