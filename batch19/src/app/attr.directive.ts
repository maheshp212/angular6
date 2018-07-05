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
  	alert('Hello :: ' + this.msg + this.fname);
  	// common bussiness logic 

  	this.appAttr();
  }

}
