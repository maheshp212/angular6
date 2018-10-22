import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
	@Input() appAttr(){}
	@Input() msg:string;
	@Input() age:number;

	@Output() res = new EventEmitter();

  constructor() { }


  @HostListener('click')
  callMe(){
  	this.appAttr();
  	console.log(this.age);
  	console.log(this.msg);

  	this.res.emit(this.age);
  }
}
