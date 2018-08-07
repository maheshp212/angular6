import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

	@Input() a:any;
	@Input() b:any;

	@Output() add= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addition(){
  	let c = this.a + this.b;
  	this.add.emit(c);
  }

}

/*
<app-output [a]="4" [b]="5" (add)="getAdd($event)">
</app-output>
*/