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
  userInfo:any = 'asdf';
  constructor(private usersService:UsersService) { }
  ngOnInit() {
  	this.listUsers();
  }
  listUsers(){
    /*this.usersService.listUsers().subscribe((res) =>{
        this.listusers = res;
      });
*/  }
  viewUser(uid){
    /*this.usersService.viewUser(uid).subscribe((r) => {
      this.userInfo = r;
    });*/
  }
  
  createUser(){
    /*this.usersService.addUser().subscribe((res)=>{
      this.userInfo = res;
      this.listUsers();
    })*/
  }  


  editUser(id){
    /*this.usersService.editUser(id).subscribe((response)=>{
      this.userInfo = response;
      this.listUsers();
    })*/
  }

  deleteUser(id){
   /* this.usersService.deleteUser(id).subscribe(res=>{
      this.userInfo = res;
      this.listUsers();
    })*/
  }
}
