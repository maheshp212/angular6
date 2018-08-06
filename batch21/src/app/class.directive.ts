import { Directive } from '@angular/core';

@Directive({
  selector: '.appClass'
})
export class ClassDirective {

  constructor() { 
  	alert('this is a custom calss directive')
  }

}
