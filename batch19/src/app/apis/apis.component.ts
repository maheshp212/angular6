import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'


@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {

	users:any;
  constructor( private usersService:UsersService) { }
  ngOnInit() {
  	this.usersService.listUsers().subscribe((response)=>{
  		//console.log(response);
  		this.users = response.data;
  	})
  }

}
