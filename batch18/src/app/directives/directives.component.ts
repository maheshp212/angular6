import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
	fname:string;
	fruits:string[] = ['kwiw', 'orang','melong'];
	count:number = 0;
  constructor() {
  	this.fname = 'qshoresdfasdfasdfasdfdff';
   }

  ngOnInit() {
  }

  callMe(){
  	console.log(this.count);
  	this.count++
  }

  login(){
    alert('login');
  }

  display(){
    alert('display');
  }
}
