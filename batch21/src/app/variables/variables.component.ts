import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {
	fname:string = 'qshore';
	age:number = 34;
	intrest:null = null;
	gender:boolean = true;
	fruits:string[] = ['kiwiw', 'orange', 'berry'];
	user:any = {name:'angular', exp:8};
	undf:any;
	
	height:'200px';
	imageSources:string[] = [
		'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
		'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg',
		'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
	]
 
  constructor() { }

  ngOnInit() {
  }

}
