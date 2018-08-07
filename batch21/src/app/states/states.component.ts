import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
	fname:any;
	lname:any;
  constructor() { }

  ngOnInit() {
  }

  login(){
  	alert(this.fname + '::' + this.lname);
  }

  getAdd(event:any){
    alert(event);
  }

}
