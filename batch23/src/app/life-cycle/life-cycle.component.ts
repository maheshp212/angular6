import { Component,
	OnInit,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

	@Component({
		selector: 'app-life-cycle',
		templateUrl: './life-cycle.component.html',
		styleUrls: ['./life-cycle.component.css']
	})
	export class LifeCycleComponent implements OnInit,OnInit,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy {

		constructor(private route:ActivatedRoute) { }

		ngOnInit() {
			console.log('ngOnInit');
			this.route.params.subscribe((res) => {
				console.log(res);
			})
		}

		//dont -use
		ngDoCheck(){
			console.log('ngDoCheck');
			}
		//dont-use
		ngAfterViewChecked(){
			console.log('ngAfterViewChecked');

		}
		//dont - use
		ngAfterContentChecked(){
			console.log('ngAfterContentChecked');
		}

		ngAfterViewInit(){
			console.log('ngAfterViewInit');
		}
		ngOnDestroy(){
			console.log('ngOnDestroy');
		}

		ngAfterContentInit(){
			console.log('ngAfterContentInit');
		}


	}
