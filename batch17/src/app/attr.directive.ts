import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
	@Input() appAttr(){};

	@Input() msg;
	@Input() fname;

  constructor() { }

  @HostListener('click')
  callMe(){
  	
  	alert('hello' + this.msg + '--' + this.fname);
  	this.appAttr(); // here the busineess logic will change as per the component
  	// business logics goes off...
  }
}
