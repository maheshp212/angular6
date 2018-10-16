import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {
	fname:string = 'qhosre';
	age: number = 45;
	a=2;
	b=3;
	gender:boolean;
	fruits:string[];
	intrerst:null;
	user:any;
	
  constructor() { 
  	this.gender = true;
  	this.fruits = ['kwii','roang', 'melon'];
  	this.intrerst = null;
  	this.user = {name:'angular', age: 5};
  }

  ngOnInit() {
  }

}
