import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
  providers:[UsersService]
})
export class ApisComponent implements OnInit {
	users:any;;
	userInfo:any
  constructor(private usersService:UsersService) { }

  ngOnInit() {
  	this.listUsers();
  }

  listUsers(){
  	this.usersService.listUsers().subscribe((res:any)=>{
  			console.log(res);
  		this.users = res.data;
  	});
  }

  viewUser(id){
  	this.usersService.viewUser(id).subscribe((res)=>{
  		this.userInfo = res;
  	})
  }

  createUser(){
	this.usersService.createUser().subscribe((res)=>{
  		this.userInfo = res;
  		this.listUsers();
  	})
  }

  editUser(id){
  	this.usersService.editUser(id).subscribe((res)=>{
  		this.userInfo = res;
  		this.listUsers();

  	})
  }

  deleteUser(id){
  	this.usersService.deleteUser(id).subscribe((res)=>{
  		this.userInfo = res;
  		this.listUsers();
  	})
  }

}
