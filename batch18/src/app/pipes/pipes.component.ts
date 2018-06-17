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
  constructor() { }

  ngOnInit() {
  	this.fname = 'qSHoRe';
  	this.age = 23;
  	this.today = new Date();



  }

}
