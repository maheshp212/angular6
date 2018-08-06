import { Directive,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  @Input() appAttr(){}; 

  @Input() msg;
  @Input() age;

  constructor() { }

  @HostListener('click')
  callMe(){ // function name is your wish and it is a call back function
  	alert('hello :: ' + this.msg + '--' + this.age);
  	this.appAttr();
  }

}
