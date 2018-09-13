import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {

  fname:string = 'qshore';
  age:number = 34;
  intrest:null = null;
  gender:boolean = true;
  fruits:string[] = ['berry', 'melon', 'kiwi'];
  user:any = {name:'angular', expt: 5};
  undf;

  a=2;
  b=3;
}
