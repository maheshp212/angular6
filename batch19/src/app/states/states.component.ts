import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
	fname:string;
	lname:string;
  constructor() { }

  ngOnInit() {
  }

  login(){
  	alert('hello :: ' + this.fname + ' :: '  + this.lname);
  }

}
