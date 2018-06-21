import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  listUsers(){
  	let url = 'http://api.qshore.com/users';
  	return this.http.get(url)
  
  }

  viewUser(id){
  	var url = 'http://api.qshore.com/view-user/' + id;
  	return this.http.get(url);
  }

  addUser(){
  	var url = 'http://api.qshore.com/add-user' ;
  	var user = {
  		fname: 'Mohan',
		lname:'Lal',
		age:23,
		email:'mohanlal@123',
		password:'lal123'
  	}

  	return this.http.post(url,user);	
  }

  editUser(id){
  	var url = 'http://api.qshore.com/edit-user/' + id ;
  	var data = {
  		fname: 'Mohan upd',
		lname:'Lal upd',
		age:23,
		email:'mohanlalupdated@123upd',
		password:'asfd1234'
  	}

  	return this.http.put(url,data);
  }

  deleteUser(id){
  	var url = 'http://api.qshore.com/delete-user/' + id;
  	return this.http.delete(url);
  }
}
