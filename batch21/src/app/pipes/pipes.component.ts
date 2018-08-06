import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

	fname:string;
	age:number;
	today:any;
	user:any;
  constructor() { }

  ngOnInit() {
  	this.fname = 'qShoRE';
  	this.age = 34;
  	this.today = new Date;
  	this.user = {name:'asdf', exp:45};
  }

}
