import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
	fname:string = 'qshore';
	age:number = 45;
	gender:boolean = true;
	fruits: string[] = ['kwiw', ' melon', 'berry'];
	undf;
	intrest:null = null;
	user = {name:'angular', exp: 5}
	a;
	b;
  constructor() {
  	this.a = 2;
  	this.b = 3;
   }

  ngOnInit() {
  }

}
