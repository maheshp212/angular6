import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  fname:any;
  age:any;
  ngOnInit() {
  	this.route.params.subscribe((params)=>{
  		this.fname = params['name'];
  		this.age = params['age'];
  	})
  }

}
