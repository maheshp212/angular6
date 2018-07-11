import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
	fname:string;
	lname:string;
  phone:string;
  email:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((res)=>{
      this.phone = res['phone'];
      this.email = res['email'];
    })
  }

  login(){
  	alert('hello :: ' + this.fname + ' :: '  + this.lname);
  }

}
