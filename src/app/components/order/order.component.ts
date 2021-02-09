import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
  }
  login() {
    const { username, password } = this.loginForm.controls;
    this.authService.login(username.value, password.value).subscribe();
  }
}
