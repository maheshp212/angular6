import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
	fname:string = 'qShoRe';
	today:any;
	age:number;
  constructor() { 
  	this.age = 12;
  }

  ngOnInit() {
  	this.today = new Date();
  }

}
