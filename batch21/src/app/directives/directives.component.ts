import { Component} from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
	fname:string;
	age:number;
	intrest:null;
	gender:boolean;
	fruits:string[];
	user:any;
	undf:any;
	
  constructor() {
  	this.fname= 'qshore';
	this.age = 34;
	this.intrest = null;
	this.gender = true;
	this.fruits = ['kiwiw', 'orange', 'berry'];
	this.user = {name:'angular', exp:8};
	
   }

 
}
