import { Directive, Input, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

	@Input() appAttr(){};
	@Input() msg;
	@Input() fname;

  @Output() goa = new EventEmitter();
  constructor() {
  	console.log('this is directive constructor');
 }


  @HostListener('click')
  aa(){
  	console.log(this.msg);
  	this.appAttr();
    
    this.goa.emit(this.fname[2]);
  	
    console.log(this.fname);
  }
}
