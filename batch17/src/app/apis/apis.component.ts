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
	userInfo:any;
  constructor( private userService:UsersService) { }

  ngOnInit() {
  	this.listUsers();
  }

  listUsers(){
    this.userService.listUsers().subscribe((res) => {
        this.listusers = res;
    })
  }

  viewUser(id){
    this.userService.viewUser(id).subscribe((res) => {
        this.userInfo = res;
    })
  }
 createUser(){
    this.userService.createUser().subscribe((res) => {
        this.userInfo = res;
        this.listUsers();
    })
  }

   editUser(uid){
    this.userService.editUser(uid).subscribe((res) => {
        this.userInfo = res;
        this.listUsers();
    })
  }

  deleteUser(id){
     this.userService.deleteUser(id).subscribe((res) => {
        this.userInfo = res;
        this.listUsers();
    })
  }

}
