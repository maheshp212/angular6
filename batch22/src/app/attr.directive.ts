import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

	@Input() appAttr(){};
	@Input() msg;
	@Input() fname;
  constructor() {
  	console.log('this is directive constructor');
 }


  @HostListener('click')
  aa(){
  	console.log(this.msg);
  	this.appAttr();
  	console.log(this.fname);
  }


}
