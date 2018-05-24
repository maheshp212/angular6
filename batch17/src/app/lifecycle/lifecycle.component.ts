import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
 AfterViewInit, AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, 
								DoCheck,
								AfterContentInit,
								AfterContentChecked,
								AfterViewInit,
								AfterViewChecked,
								OnDestroy {

	fname="qshore"
  constructor() { }
  ngOnInit() {
  	console.log('ngOnInit invoked');
  }
  ngDoCheck(){
  	console.log('ngDoCheck invoked');
  }
  ngAfterViewInit(){
  	console.log('ngAfterViewInit invoked');
  }
  ngAfterViewChecked(){
  	console.log('ngAfterViewChecked invoked');
  }
  ngAfterContentInit(){
  	console.log('ngAfterContentInit invoked');
  }
  ngAfterContentChecked(){
  	console.log('ngAfterContentChecked invoked');
  }
  ngOnDestroy(){
  	console.log('ngOnDestroy invoked');

  }
}
