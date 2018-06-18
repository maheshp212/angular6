import { Component,
	OnInit,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit,OnDestroy,
					AfterViewInit,AfterContentInit, DoCheck,
					AfterContentChecked, AfterViewChecked {
  constructor() { }
  ngOnInit() {
  	console.log('ngOnInit');
  }
  ngOnDestroy(){
  	console.log('ngOnDestroy');
  }
  ngAfterContentChecked(){ // pls dont use this 
  	console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(){
  	console.log('ngAfterViewInit');

  }

  ngAfterContentInit(){
  	console.log('ngAfterContentInit');

  }
  ngDoCheck(){// pls dont use this 
  	console.log('ngDoCheck');

  }
  ngAfterViewChecked(){// pls dont use this 
  	console.log('ngAfterViewChecked');

  }

}
