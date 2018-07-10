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
	userInfo:any;
  constructor( private usersService:UsersService) { }

  ngOnInit() {
  	this.usersService.listUsers().subscribe((response :any)=>{
  		this.users = response.data;
  	})
  }

  createUser(){
  	this.usersService.createUser().subscribe((response :any)=>{
  		this.userInfo = response.data;
  		this.usersService.listUsers().subscribe((response :any)=>{
	  		this.users = response.data;
	  	})
  	})
  }
  viewUser(uid){
  	this.usersService.viewUser(uid).subscribe((response :any)=>{
  		this.userInfo = response.data;
  	});
  }
  editUser(uid){
  	this.usersService.editUser(uid).subscribe((response :any)=>{
  		this.userInfo = response.data;
  		this.usersService.listUsers().subscribe((response :any)=>{
	  		this.users = response.data;
	  	})

  	});
  }
  deleteUser(uid){
  	this.usersService.deleteUser(uid).subscribe((response :any)=>{
  		this.userInfo = response.data;
  		this.usersService.listUsers().subscribe((response :any)=>{
	  		this.users = response.data;
	  	})
  	});
  }
}
