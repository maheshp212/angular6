import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {
	fname:string = 'qshore';
	age:number = 34;
	intrest:null = null;
	gender:boolean = true;
	fruits:string[] = ['kiwiw', 'orange', 'berry'];
	user:any = {name:'angular', exp:8};
	undf:any;
	


  constructor() { }

  ngOnInit() {
  }

}
