import { Component, OnInit, DoCheck, AfterContentInit,
 AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, DoCheck, 
			AfterContentInit, AfterContentChecked,
			AfterViewInit,AfterViewChecked,OnDestroy {
fname:string;

  constructor() { }


  ngOnInit() {
  	console.log('ngOnInit');
  }


  ngAfterContentChecked(){
  	console.log('ngAfterContentChecked');

  }

  ngOnDestroy(){
  	console.log('ngOnDestroy');

  }

  ngAfterViewInit(){
  	console.log('ngAfterViewInit');

  }

  ngAfterContentInit(){
  	console.log('ngAfterContentInit');

  }
  ngDoCheck(){
  	console.log('ngDoCheck');

  }
  ngAfterViewChecked(){
  	console.log('ngAfterViewChecked');

  }
}
