import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
	fname:string = 'qShoRE';
	age:number = 34;
	day:any;
	user:any;
	
  constructor() {
  	this.user = {name:'angular', exp:5};
   }

  ngOnInit() {
  	this.day = new Date();
  }
callme(){
  alert('some thng else ')
}
}
