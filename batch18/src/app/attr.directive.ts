import { Directive , Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  constructor() { }

  @Input() appAttr(){}

  @Input() msg;

  @Input() fname = 'qshore';

  @HostListener('click')
  callMesdf(){

  	// componnet specific Busineess Logic
  	this.appAttr();
  	
  	//directive specific logic
  	alert('hello ::: ' + this.msg + ' ::  ' + this.fname);
  }
}
