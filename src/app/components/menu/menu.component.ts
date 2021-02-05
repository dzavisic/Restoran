import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare function mainCourse(data:any): any;
declare function warmAppetizers(data:any): any;
declare function coldAppetizers(data:any): any;
declare function salads(data:any): any;
declare function deserts(data:any): any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private http:HttpClient) { 
  }

  ngOnInit(): void {
    let url = "http://localhost:3014/api/menuFull";
    this.http.post(url,{}).toPromise().then((data:any) => {
      var datapassed = JSON.parse(JSON.stringify(data));
      mainCourse(datapassed['data']);
      warmAppetizers(datapassed['data']);
      coldAppetizers(datapassed['data']);
      salads(datapassed['data']);
      deserts(datapassed['data']);
    });



  };
  


}
