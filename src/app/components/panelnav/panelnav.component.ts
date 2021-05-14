import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panelnav',
  templateUrl: './panelnav.component.html',
  styleUrls: ['./panelnav.component.css']
})
export class PanelnavComponent implements OnInit {
  isNavbarCollapsed = true; 
  constructor() { }

  ngOnInit(): void {
  }

  logoff(){
    localStorage.removeItem('token');
    console.log("Token has expired!");
    window.location.href="/login";
  }
  
}
