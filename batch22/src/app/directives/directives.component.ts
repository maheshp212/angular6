import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

	fname:string;
	age:number;
	fruits:string[];
  constructor() {
  	this.fname = 'qshore';
  	this.age = 34;
  	this.fruits = ['berry', 'melon', 'kiwi'];
  }

  ngOnInit() {
  }

}
