import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cmscourses',
  templateUrl: './cmscourses.component.html',
  styleUrls: ['./cmscourses.component.css']
})
export class CmscoursesComponent implements OnInit {
  courses$:Observable<any>;
  id:string="";
  name:string="";
  constructor(public order: OrderService, private http: HttpClient) { }

  ngOnInit(): void {
    this.courses$ = this.order.coursesData$.pipe(
      //tap(data => console.log(data.data)),
      map(data => data.data)
    )
  }

  download(filename:any, jsontext:any){
    var strinng = "Id Ime";
    for(let i=0; i<jsontext.length; i++){
      strinng = strinng + "\n" + jsontext[i]['id'] + " " + jsontext[i]['name'];
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
  downloadCourse(){

    this.courses$ = this.order.coursesData$.pipe(
      tap(data => this.download('courses_list.txt',data.data)),
      map(data => data.data)
    )
  }
  addToCourses(){
    let url1 = "http://localhost:3014/api/addCourse";
    this.http.post(url1,{id:this.id, name: this.name}).toPromise().then((data:any) => {});
    window.location.reload()
  }
  removeFromCourses(id:any){
    let url1 = "http://localhost:3014/api/removeCourse";
    this.http.post(url1,{id:id}).toPromise().then((data:any) => {});
    window.location.reload()
  }
}
