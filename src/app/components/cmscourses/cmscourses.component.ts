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
