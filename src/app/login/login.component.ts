import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perfect banking partner"
  acnt="enter your accnt numner"
userDetails={
  1200:{accno:1200,username:"aparna",password:234,balance:22000},
  1100:{accno:1100,username:"nithin",password:620,balance:25000},
  1450:{accno:1450,username:"nithya",password:450,balance:20000},
  1001:{accno:1001,username:"aravind",password:123,balance:23000},

}
  constructor() { }

  ngOnInit(): void {
  }


}
