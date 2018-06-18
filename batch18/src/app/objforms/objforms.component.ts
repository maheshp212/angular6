import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objforms',
  templateUrl: './objforms.component.html',
  styleUrls: ['./objforms.component.css']
})
export class ObjformsComponent implements OnInit {

	user:any = {};
  constructor() { }

  ngOnInit() {
  }


  login(){
  	console.log(this.user)
  }
}
