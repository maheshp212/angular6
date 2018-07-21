import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
	fname:string = 'qshore';
	age:number = 54;
	gender:boolean = true;
	intrest:null = null;
	fruits : string[] = ['kwii', 'berry', 'melong'];
	user:any = {exp:5, tech:'angular'};
	undf:any;
	count:number = 0
  constructor() { }

  ngOnInit() {
  }

  callMe(){
  	console.log(this.count);
  	this.count++;
  }

  login(){


    alert('login invoked');


  }
}
