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
}
