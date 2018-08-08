import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private httpClient:HttpClient) { }

  listUsers(){
  	var url = 'http://api.qshore.com/users';
  	return this.httpClient.get(url);
  }

  viewUser(uid){
  	var url = "http://api.qshore.com/view-user/"+uid;
  	return this.httpClient.get(url);
  }

  createUser(){
  	var data = {
  		fname: 'Mohan',
		lname:'Lal',
		age:23,
		email:'mohanlal@123',
		password:'lal123'
  	}
  	var url = "http://api.qshore.com/add-user";
  	return this.httpClient.post(url, data);
  }

  editUser(uid){
  	var data = {
  		fname: 'Mohan upd',
		lname:'Lalupd',
		age:23,
		email:'mohanlalupd@123',
		password:'lal123upd'
  	}
  	var url = "http://api.qshore.com/edit-user/"+uid;
  	return this.httpClient.put(url, data);
  }

  deleteUser(uid){
  	var url = "http://api.qshore.com/delete-user/"+uid;
  	return this.httpClient.delete(url);
  }
}
