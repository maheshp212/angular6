import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {
@Input() appAttribute(){};

@Input() msg;
@Input() gname;

constructor() { }



@HostListener('click')
callMe(){
	alert('hello ::' + this.gname + ' :: ' + this.msg);
	this.appAttribute();
}


}
