import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
  providers:[UsersService]
})
export class ApisComponent implements OnInit {
	listusers:any;
  constructor( private userService:UsersService) { }

  ngOnInit() {
  	this.userService.listUsers().subscribe((res) => {
  		this.listusers = res.data;
	})
  }

}
