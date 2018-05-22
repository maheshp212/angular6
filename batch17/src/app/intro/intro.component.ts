import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
	fname:string= "qhore";
	age:number = 23;
	fruits:string[] = ['kiwi', 'melon', 'berry'];
	gender:boolean = true;
	intrest:null = null;
	undf;
	users:any;

	a:number;
	b:number;
  	constructor() {
  		this.users =  {name:'qhsore', tech:'angular'};
  		this.a = 2;
  		this.b = 3;
 	}


intro(){
	alert('intro function');
}

}
