import { Component, OnInit } from '@angular/core';

import {UsersService} from './../users.service'

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
  providers:[UsersService]
})
export class ApisComponent implements OnInit {
	usersList:any
	res:any
  constructor( private user: UsersService) { }

  ngOnInit() {
  	this.listUsers();
  }

  listUsers(){
  	this.user.listUsers().subscribe((res : any)=>{
  		console.log(res);
  		this.usersList = res.data;
  	})
  } 

  createUser(){
  	this.user.createuser().subscribe((res:any)=>{
  		this.res = res;
  		this.listUsers();
  	})
  }
  viewUser(id:number){
  	this.user.viewUser(id).subscribe((res:any)=>{
  		this.res = res;
  	})

  }
  editUser(id:number){
	this.user.editUsers(id).subscribe((res:any)=>{
  		this.res = res;
  		this.listUsers();
  	})
  }
  deleteUser(id:number){
  	this.user.delteUsers(id).subscribe((res:any)=>{
  		this.res = res;
  		this.listUsers();
  	})

  }

}
