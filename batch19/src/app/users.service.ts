import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  listUsers(){
  	var url = 'http://api.qshore.com/users'
  	//return 'je';
  	return this.http.get(url);
  }

  createUser(){
  	var user = {
  		fname: 'Mohan',
		lname:'Lal',
		age:23,
		email:'mohanlal@123',
		password:'lal123',
	};

	var url = 'http://api.qshore.com/add-user';

	return this.http.post(url, user);


  }

  viewUser(uid){
  	var url = "http://api.qshore.com/view-user/" + uid;
  	return this.http.get(url);
  }
  editUser(uid){

	var user = {
  		fname: 'qshore',
		lname:'tehc',
		age:23,
		email:'mohanlal@123',
		password:'lal123',
	};  	
	var url = "http://api.qshore.com/edit-user/" + uid;
  	return this.http.put(url,user);
  }

  deleteUser(uid){
  	var url = "http://api.qshore.com/delete-user/" + uid;
  	return this.http.delete(url);
  }
}
