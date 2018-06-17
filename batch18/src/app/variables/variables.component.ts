import { Component} from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent{

	age:number = 34;
	fname:string = 'qshore';
	gender:boolean = true;
	intrest:null = null;
	fruits:string[] = ['kwiw', 'orang','melong'];
	user:any = {name: 'angualr', exp : 5}
	undf;


  constructor() { }
}
