import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'



@Injectable({
	providedIn: 'root'
})
export class UsersService {

	constructor(private http:HttpClient) { }

	list(){
		return this.http.get('http://api.qshore.com/users');
	}

	create(data:any){
		let url = 'http://api.qshore.com/add-user';
		return this.http.post(url, data);
	}

	view(id){
		let url = 'http://api.qshore.com/view-user/' + id;
		return this.http.get(url);
	}
	delete(id){
		let url = 'http://api.qshore.com/delete-user/' + id;
		return this.http.delete(url);
	}

	edit(id, data){
		let url = 'http://api.qshore.com/edit-user/' + id;
		return this.http.put(url, data);
	}
}
