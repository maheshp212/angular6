import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-obj-forms',
  templateUrl: './obj-forms.component.html',
  styleUrls: ['./obj-forms.component.css']
})
export class ObjFormsComponent implements OnInit {
	user:any = {};
  constructor( private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:any)=>{
      console.log(params);
    })
  }

  login(){
  	console.log(this.user)
  }
}
