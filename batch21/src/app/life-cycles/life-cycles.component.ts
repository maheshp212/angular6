import { Component,
	OnInit,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-life-cycles',
  templateUrl: './life-cycles.component.html',
  styleUrls: ['./life-cycles.component.css']
})
export class LifeCyclesComponent implements OnInit,
						DoCheck,
						AfterContentInit,
						AfterContentChecked,
						AfterViewInit,
						AfterViewChecked,
						OnDestroy {


	fname:any;
  constructor() { }

  ngOnInit() {
  	console.log('ngOnInit');
  }

  ngOnDestroy(){
  	console.log('ngOnDestroy');
  }

  /** dont use this. this will trigger for every small change **/
  ngAfterViewChecked(){
  	console.log('ngAfterViewChecked');
  }

  /** dont use this. this will trigger for every small change **/
  ngAfterContentChecked(){
  	console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(){
  	console.log('ngAfterContentInit');
  }
  ngAfterViewInit(){
  	console.log('ngAfterViewInit');
  }

  /** dont use this. this will trigger for every small change **/
  ngDoCheck(){
  	console.log('ngDoCheck');
  }
}
