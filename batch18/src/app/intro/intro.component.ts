import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private routes:ActivatedRoute) { }
  id:any;
  gname:any;
  ngOnInit() {

  	this.routes.params.subscribe((res)=>{
  		this.id = res['id'];
  		this.gname = res['gname'];
  	})
  }

}
