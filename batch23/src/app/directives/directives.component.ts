import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
	a = 3;
	fruits = ['kiwiw', 'melon', 'ornage'];
	fname:string;
  constructor() { }

  ngOnInit() {
  }

  login(){
  	console.log('tjhis is is cusotm attr directie');
  }

  outEvent(n){
  	console.log('evnet emitter')
  	console.log(n);

  }
}
