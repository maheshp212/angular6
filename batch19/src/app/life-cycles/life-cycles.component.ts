import { Component, OnInit, DoCheck, AfterContentInit, 
	AfterContentChecked, AfterViewInit, AfterViewChecked, 
	OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycles',
  templateUrl: './life-cycles.component.html',
  styleUrls: ['./life-cycles.component.css']
})
export class LifeCyclesComponent implements OnInit, DoCheck, AfterContentInit, 
									AfterContentChecked, AfterViewInit, 
									AfterViewChecked, OnDestroy {

	ngOnDestroy(){ // when you leave the componentDe
		console.log('ngOnDestroy');
	}
	fname:string;

  constructor() { }
  ngAfterViewChecked(){ // checking for the modifcaiton in the view
		console.log('ngAfterViewChecked');
  }

  ngOnInit() { // immediatley after consturctor
		console.log('ngOnInit');
  }

  ngDoCheck(){ // for every change in component
		console.log('ngDoCheck');
  }

  ngAfterViewInit(){ // afteer the template invoked
		console.log('ngAfterViewInit');
  }

  ngAfterContentInit(){ // after feilds get intialized
		console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){ // checkign for the modificaiotn fo the feilds
		console.log('ngAfterContentChecked');
  }
}
