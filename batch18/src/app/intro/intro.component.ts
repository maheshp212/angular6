import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }
  id:any;
  fname:any;
  ngOnInit() {
  	this.route.params.subscribe((res)=>{
  		this.id = res['id'];
  		this.fname = res['fname'];
  	})

  }

}
