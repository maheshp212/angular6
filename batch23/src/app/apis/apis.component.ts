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
  constructor(private user:UsersService) { }

  ngOnInit() {
	this.listUsers();
  	
  }

  createUser(){
  	let data = {
  		fname: 'Mohan',
		lname:'Lal',
		age:23,
		email:'mohanlal@123',
		password:'lal123'
  	}
  	this.user.create(data).subscribe((res:any)=>{
  		this.userInfo = res.data;
  		this.listUsers();
  	})
  }

  viewUser(id){
	this.user.view(id).subscribe((res:any)=>{
  		this.userInfo = res.data;
  	})
  }

  editUser(id){
  	let data = {
  		fname: 'qshore',
		lname:'nag',
		age:23,
		email:'mohanlalad@123',
		password:'lal123'
  	}
  	this.user.edit(id, data).subscribe((res:any)=>{
  		this.userInfo = res.data;
  		this.listUsers();
  	})

  }
  deleteUser(uid){
	this.user.delete(uid).subscribe((res:any)=>{
  		this.userInfo = res.data;
  		this.listUsers();
  	})
  }

  listUsers(){
  	this.user.list().subscribe((res:any)=>{
  		this.users = res.data;
  	})
  }

}
