import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
	fname:string;
	age:number;
	fruits ;
	count = 0;
  constructor() {
  	this.fruits = ['kiwi', 'melon', 'berry'];
   }

  ngOnInit() {
  	this.fname = 'qshore';
  	this.age = 34;
  }

  callMe(){
  	console.log(this.count);
  	this.count++;
  }

  login(){
    alert('from compnenet');

    // customized business logic as per the compnoent
  }
}
