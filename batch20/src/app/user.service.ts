import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
/*import {Http} from '@angular/http'*/


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  listUsers(){
  	var url = 'http://api.qshore.com/users';
  	return this.http.get(url);
  			
  		/*.map((res)=>{

  		})
  		.catch((res)=>{

  		});*/
  }

  createUser(data){
  var url = 'http://api.qshore.com/add-user';
  return this.http.post(url,data);
  }
  viewUsers(uid){
  	var url = 'http://api.qshore.com/view-user/'+uid;
  	return this.http.get(url);
  			
  }

  editUsers(uid, data){
  	var url = 'http://api.qshore.com/edit-user/'+uid;
  	return this.http.put(url,data);
  			
  }

    deleteUsers(uid){
  	var url = 'http://api.qshore.com/delete-user/'+uid;
  	return this.http.delete(url);
  			
  }
}
