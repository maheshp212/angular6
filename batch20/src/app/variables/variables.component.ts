import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {

	fname:string = 'qshore';
	age:number = 34;
	gender:boolean = true;
	intrest:null = null;
	fruits : string[] = ['kwii', 'berry', 'melong'];
	user:any = {exp:5, tech:'angular'};
	undf:any;
  constructor() { }

  ngOnInit() {
  }

}
