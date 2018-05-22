import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

	age:number = 30;
	fname:string = 'qshore';
	fruits:string[]	 = ['kiwi', 'orange', 'melon'];
	count:number = 0;

  constructor() { }

  ngOnInit() {
  }

  callMe(){
  	console.log(this.count);
  	this.count++;
  }

  login(){
    alert('componnent specific function ::: login');
  }
}
