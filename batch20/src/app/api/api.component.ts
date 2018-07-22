import { Component, OnInit } from '@angular/core';
import {UserService} from './../user.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers : [UserService]
})
export class ApiComponent implements OnInit {

  constructor(private user: UserService) { }
  users:any;
  userInfo:any;
  ngOnInit() {
    this.listUser();
  	
  }

  listUser(){
    this.user.listUsers().subscribe(
      (res)=>{
        this.users = res.data;
      });
  }
  createUser(){
    var data = {
      fname:' Mohan',
      lname:'Lal',
      age:'23',
      email:'mohanlal@123',
      password:'lal123'
    }

    this.user.createUser(data).subscribe((res)=>{
      this.userInfo = res;
      this.listUser();
    })
  }

  viewUser(id:any){
    this.user.viewUsers(id).subscribe((res)=>{
      this.userInfo = res;
    })
    
  }
  
  editUser(id:any){
       var data = {
      fname:' Mohan asdf',
      lname:'Lal assdff',
      age:'23234',
      email:'mohanlalasdfasd@123',
      password:'lal123'
    }

    this.user.editUsers(id, data).subscribe((res)=>{
      this.userInfo = res;
      this.listUser();

    })
  }
  
  deleteUser(id:any){
    this.user.deleteUsers(id).subscribe((res)=>{
      this.userInfo = res;
      this.listUser();

    })
    
  }

}
