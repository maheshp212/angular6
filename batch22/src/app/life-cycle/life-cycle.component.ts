import { Component, OnInit, DoCheck, AfterContentInit, 
	AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
, OnDestroy {

	fname:string;
  constructor() { }

  ngOnInit() {
  	this.fname = 'qshore';
  	console.log('ngOnInit');
  }

  ngAfterContentInit(){
  	console.log('ngAfterContentInit');

  }
  ngAfterViewInit(){
  	console.log('ngAfterViewInit');

  }
  //dont use
  ngAfterContentChecked(){
  	console.log('ngAfterContentChecked');

  }
	//dont use
  ngDoCheck(){
  	console.log('ngDoCheck');
  }
  //dont use
  ngAfterViewChecked(){
  	console.log('ngAfterViewChecked');

  }

  ngOnDestroy(){
  	console.log('ngOnDestroy');

  }

}
