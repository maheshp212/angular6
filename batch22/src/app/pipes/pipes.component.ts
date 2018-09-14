import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

	age:number = 23;
	today:any = new Date();
	fname:string = 'QsHorE';
	
  constructor() { }

  ngOnInit() {
  }


}
