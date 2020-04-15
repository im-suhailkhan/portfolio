import { Component, OnInit } from '@angular/core';
//import { auth } from '../auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//export class LoginComponent implements OnInit {

  constructor(private auth: auth) { }

  ngOnInit(): void {
  }

}
