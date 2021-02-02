import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = ['../../../assets/img/food1.jpg','../../../assets/img/food2.jpg','../../../assets/img/food3.jpg']
  constructor() {

   }

  ngOnInit(): void {
  }

}
