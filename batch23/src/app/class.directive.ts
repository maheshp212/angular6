import { Directive } from '@angular/core';

@Directive({
  selector: '.appClass'
})
export class ClassDirective {
  constructor() { 
  	this.callMe()
  }

  callMe(){
  	console.log('custom class directive');
  }
}
