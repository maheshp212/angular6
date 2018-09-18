import { Directive } from '@angular/core';

@Directive({
  selector: '.appClasss'
})
export class ClasssDirective {

  constructor() { 
  	console.log(' ClasssDirective invoked')
  }
}
