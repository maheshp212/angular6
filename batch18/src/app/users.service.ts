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
}
