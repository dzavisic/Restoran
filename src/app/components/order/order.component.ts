import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare function mainCourseOrder(data:any): any;
declare function warmAppetizers(data:any): any;
declare function coldAppetizers(data:any): any;
declare function salads(data:any): any;
declare function deserts(data:any): any;
declare function listColdJs(): any;
declare function mainCourseOrderMin(data:any): any;
declare function warmAppetizersMin(data:any): any;
declare function coldAppetizersMin(data:any): any;
declare function saladsMin(data:any): any;
declare function desertsMin(data:any): any;
declare function listAllFoodExpanded(): any;
declare function printOrderToHtmlMinFromExp():any;
declare function printTotalPriceToHtmlMinFromExp(): any;
declare function printOrderToHtmlExpFromMin():any;
declare function printTotalPriceToHtmlExpFromMin(): any;
declare function listColdJsInit(): any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  fullname:string="";
  num_people:string="";
  datetime:string="";
  tel_numb:string="";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let url = "http://localhost:3014/api/menuFull";
    this.http.post(url,{}).toPromise().then((data:any) => {
      var datapassed = JSON.parse(JSON.stringify(data));
      this.callJs(datapassed['data']);
    });
    window.onresize = this.printLastCart;
  }
  sendReservation(){
    let url1 = "http://localhost:3014/api/sendReservation";
    this.http.post(url1,{fullname:this.fullname, num_people:this.num_people, datetime:this.datetime, tel_numb:this.tel_numb}).toPromise().then((data:any) => {});
    window.location.href='/';
  }
  /* VODI RACUNA O PREBACIVANJU IZMEDJU EXPANDED I COLLAPSED SCREENA ZA KOŠARICU */
  printLastCart(){
    var myWidth = window.innerWidth;
    if(myWidth<=992){
      printOrderToHtmlMinFromExp();
      printTotalPriceToHtmlMinFromExp();
    }else{
      printOrderToHtmlExpFromMin();
      printTotalPriceToHtmlExpFromMin();
    }
  }

  /* SALJE PODATKE SA SERVERA, I IZLISTAVA INICIJALNE PRIKAZE JELA */
  callJs(data){
    mainCourseOrder(data);
    warmAppetizers(data);
    coldAppetizers(data);
    salads(data);
    deserts(data);
    mainCourseOrderMin(data);
    warmAppetizersMin(data);
    coldAppetizersMin(data);
    saladsMin(data);
    desertsMin(data);
    listColdJsInit();
    listAllFoodExpanded();
  }
  


}
