import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

fname:string = 'qsHoRe';
	age:number = 34;
	gender:boolean = true;
	intrest:null = null;
	fruits : string[] = ['kwii', 'berry', 'melong'];
	user:any = {exp:5, tech:'angular'};
	undf:any;
	today:any = new Date();
  constructor() { }

  ngOnInit() {
  }

}
