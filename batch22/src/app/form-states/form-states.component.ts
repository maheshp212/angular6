import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-states',
  templateUrl: './form-states.component.html',
  styleUrls: ['./form-states.component.css']
})
export class FormStatesComponent implements OnInit {

	fname:string;
	lname:string;
	  constructor() { }

  ngOnInit() {
  }

  login(){
  	alert('hello' + this.fname + this.lname);
  }
}
