import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  fname:any;
  uid:any;
  ngOnInit() {

  	this.route.params.subscribe((res)=>{
  		console.log(res);
  		/*this.fname = res['fname'];
  		this.uid = res['uid'];*/
  		this.fname = res.fname;
  		this.uid = +res.uid;
  		console.log(this.uid);
  	})
  }

}
