import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objform',
  templateUrl: './objform.component.html',
  styleUrls: ['./objform.component.css']
})
export class ObjformComponent implements OnInit {
	user:any = {}
  constructor() { }

  ngOnInit() {
  }

  login(){
  	alert(this.user.fname + ' -- ' + this.user.lname);
  }

}
